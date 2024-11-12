import React, { useState } from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'


const Header = () => {

  const [active, setActive] = useState(false) 

  const togglBurger = () => {
    setActive(!active)
  }


  return (
    <>
        <header className="header">
          <div className="container">
          <nav className="nav">

          <h1>Digital Agency</h1>


        <div className={` header-Link ${  active ? 'active' : ''}`}>
        <Link to={'/'}>home</Link>
        <Link to={'/about'}>about</Link>
        <Link to={'/Testimonials'}>Testimonials</Link>
        <Link to={'/Contact'}>Contacts</Link>

      


        </div>
        <div onClick={togglBurger } className={`burger ${active ? 'active' : ''}`}>

<span></span>
<span></span>
<span></span>        

</div>
         </nav>

          </div>
        </header>
    </>
  )
}

export default Header