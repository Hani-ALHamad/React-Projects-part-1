import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {
  const [toggle , changeToggle] = useState(false)

  return (
    <div id="main">
      <div id="nav">
        <div id="logoAndButton">
          <img src={logo} />
          <button onClick={() => changeToggle(!toggle)} id="toggle"><FaBars /></button>
        </div>
        <div id="links">
          {links.map((item) =>(
            <a key={item.id} className="link" href={item.url}>{item.text}</a>
          ))}
        </div>
        <div id="social">
          {social.map((item)=> (
            <a key={item.id} className="icon" href={item.url}>{item.icon}</a>
          ))}
        </div>
      </div>
      <div id="links_small" className={toggle === true ? "open" : "closed"}>
        {links.map((item) => (
          <a key={item.id} className="link" href={item.url}>{item.text}</a>
        ))}
      </div>
    </div>
  )
}

export default Navbar
