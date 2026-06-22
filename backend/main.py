import html
from os import getenv

from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi_mail import ConnectionConfig, FastMail, MessageSchema, MessageType
from pydantic import BaseModel, EmailStr, Field
from starlette.responses import JSONResponse

load_dotenv()


class ContactRequest(BaseModel):
    name: str = Field(min_length=2, max_length=100)
    email: EmailStr
    message: str = Field(min_length=10, max_length=5000)


MAIL_USERNAME = getenv("MAIL_USERNAME")
MAIL_PASSWORD = getenv("MAIL_PASSWORD")
MAIL_FROM = getenv("MAIL_FROM", MAIL_USERNAME or "")
MAIL_PORT = int(getenv("MAIL_PORT", "587"))
MAIL_SERVER = getenv("MAIL_SERVER", "smtp.gmail.com")
MAIL_STARTTLS = getenv("MAIL_STARTTLS", "true").lower() == "true"
MAIL_SSL_TLS = getenv("MAIL_SSL_TLS", "false").lower() == "true"
RECEIVE_TO_EMAIL = getenv("RECEIVE_TO_EMAIL", MAIL_USERNAME or "")
FRONTEND_ORIGIN = getenv("FRONTEND_ORIGIN", "http://localhost:5173")

if not MAIL_USERNAME or not MAIL_PASSWORD or not MAIL_FROM or not RECEIVE_TO_EMAIL:
    raise RuntimeError("Missing email environment variables")

conf = ConnectionConfig(
    MAIL_USERNAME=MAIL_USERNAME,
    MAIL_PASSWORD=MAIL_PASSWORD,
    MAIL_FROM=MAIL_FROM,
    MAIL_PORT=MAIL_PORT,
    MAIL_SERVER=MAIL_SERVER,
    MAIL_STARTTLS=MAIL_STARTTLS,
    MAIL_SSL_TLS=MAIL_SSL_TLS,
    USE_CREDENTIALS=True,
    VALIDATE_CERTS=True,
)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_ORIGIN, "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
async def health_check():
    return {"status": "ok"}


@app.post("/contact")
async def send_contact_email(payload: ContactRequest) -> JSONResponse:
    safe_name = html.escape(payload.name)
    safe_email = html.escape(str(payload.email))
    safe_message = html.escape(payload.message).replace("\n", "<br />")

    body = f"""
    <h2>New message from your portfolio contact form</h2>
    <p><strong>Name:</strong> {safe_name}</p>
    <p><strong>Email:</strong> {safe_email}</p>
    <p><strong>Message:</strong></p>
    <p>{safe_message}</p>
    """

    message = MessageSchema(
        subject=f"Portfolio contact form: {safe_name}",
        recipients=[RECEIVE_TO_EMAIL],
        body=body,
        subtype=MessageType.html,
    )

    fm = FastMail(conf)

    try:
        await fm.send_message(message)
    except Exception as exc:
        raise HTTPException(status_code=500, detail="Email could not be sent") from exc

    return JSONResponse(status_code=200, content={"message": "Message sent successfully"})
