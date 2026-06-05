import './App.css'
import { Homepage } from './pages/Homepage.jsx'
import { About } from './pages/About.jsx'
import { Routes, Route } from 'react-router'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
    </Routes>
    </>
  )
}

export default App
