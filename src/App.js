import React from 'react'
import Header from './components/common/heading/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import './App.css'
import Contact from './components/contact/Contact'
import Team from './components/team/Team'
import Footer from './components/common/footer/Footer'
import Blog from './components/blog/Blog'
import Pricing from './components/pricing/Pricing'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/team' element={<Team />} />
          <Route path='/journal' element={<Blog />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
