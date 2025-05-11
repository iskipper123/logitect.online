import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css' // Keep the original App.css for now, will integrate Tailwind later

// Import Components
import Home from './components/Home'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Prices from './components/Prices'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Quote from './components/Quote'
import AdminPanel from './components/AdminPanel'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation would go here */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/prices" element={<Prices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
