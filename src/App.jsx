import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './pages/home'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>

    <Header/>

    <Routes>

    <Route  path='/' element={<Home/>} />
    <Route  path='/About' element={<About/>} />
    <Route  path='/Testimonials' element={<Testimonials/>} />
    <Route  path='/Contact' element={<Contact/>} />

    </Routes>

    <Footer/>

    </>
  )
}

export default App