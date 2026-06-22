# FastAPI backend

## Setup

1. Create a virtual environment.
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Copy `.env.example` to `.env` and fill in your Gmail app password.
4. Run the server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```

## Gmail SMTP

Use `smtp.gmail.com` with a Gmail app password. Do not use your normal Gmail password.
