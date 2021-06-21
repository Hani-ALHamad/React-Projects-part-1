import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'

const Navbar = () => {
  return (
    <div id="navbar_container" to="/">
        <div id="navbar_box">
        <Link to="/" id="navbar_logo"><img id="navbar_logo_img" src={logo} alt="logo" /></Link>
          <Link className="navbar_link" to="/">Home</Link>
          <Link className="navbar_link" to="/about">About</Link>
        </div>
    </div>
  )
}

export default Navbar
