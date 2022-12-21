import React from 'react'
import '../css/style.css';
import { Link } from 'react-router-dom';


function Navbar() {

   
  return (
    <div>
          <nav className="navbar">
        <div className="navbar-container container">
            <input type="checkbox" name="" id="" />
            <div className="hamburger-lines">
                <span className="line line1"></span>
                <span className="line line2"></span>
                <span className="line line3"></span>
            </div>
            <ul className="menu-items">
                <li><Link to='/' className="anchor" >Home</Link></li>
                <li><Link to='/about' className="anchor" >About</Link></li>
                <li><Link to='/category' className="anchor" >Category</Link></li>
                <li><Link to='/faq' className="anchor" >FAQ</Link></li>
                <li><Link to='/help' className="anchor" >Help</Link></li>
                <li><Link to='/contact' className="anchor" >Contact</Link></li>
            </ul>
            <h1 className="logo">
            <img src="https://st2.depositphotos.com/3867453/8105/v/950/depositphotos_81057948-stock-illustration-letter-z-number-2-logo.jpg" alt="..."  width='100px' height='70px'/>
            Web Productivity</h1>
        </div>
    </nav>
    </div>
  )
}

export default Navbar