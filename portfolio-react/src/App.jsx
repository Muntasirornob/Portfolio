import { useState } from 'react'
import './App.css'
import { Homepage } from './pages/Homepage.jsx'
import {Routes, Route } from 'react-router';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<div>About Page</div>} />
    </Routes>
    </>
  )
}

export default App
