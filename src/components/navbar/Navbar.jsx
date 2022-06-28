import React from 'react'
import logo from '../../assets/websitelogo.png'
import './navbar.css'
import { FiUser } from 'react-icons/fi' 

const Navbar = () => {
  return (
    <nav>
        <a href="#"><img src={logo} alt="websitelogo" className='logo' /></a>
        <div className="nav__options">
            <a href="">HOME</a>
            <a href="">THE JOURNEY</a>
            <a href="">TEAM</a>
            <a href="">STORE</a>
            <a href="">CONTACT</a>
        </div>
        <a href="" className='user'><FiUser size={21} /> GAGAN</a>
    </nav>
  )
}

export default Navbar