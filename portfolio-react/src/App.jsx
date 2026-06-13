import './styles/components/Button.css'
import { Homepage } from './pages/Homepage.jsx'
import { About } from './pages/About.jsx'
import { Contact } from './pages/Contact.jsx'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </>
  )
}

export default App
