import React, { useContext } from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import data from './data'
import { Context } from './context'

const Navbar = () => {
  const { 
    changeSubmenuPosition, 
    changeSubmenuActive, 
    submenuActive, 
    submenuPosition, 
    changeSubmenuIndex, 
    submenuIndex,
    changeSidebarActive} = useContext(Context)

  const mouseOver = (e) => {
    const V = e.target.offsetTop + (e.target.offsetHeight/1.25)
    const H = e.target.offsetLeft + e.target.offsetWidth / 2 -32 - (data[(e.target.name)].links.length * 175) / 2

    changeSubmenuActive("flex")
    changeSubmenuPosition([V,H])
    changeSubmenuIndex(e.target.name)
  }

  const mouseLeave = () => {
    changeSubmenuActive("none")
  }

  return (
    <div id="navbar_container">
      <img id="navbar_logo" src={logo} />
      <ul id="navbar_links" onMouseLeave={mouseLeave}>
        {data.map((item, index) =>(
          <button key={item.page} className="navbar_link" name={index} onMouseOver={mouseOver}>{item.page}</button>
        ))}

{/* ------------------------------------------- submenu ------------------------------------------------*/}
        <div id="submenu_container" style={{
          display: `${submenuActive}`,
          top: `${submenuPosition[0]}px`,
          left: `${submenuPosition[1]}px`
        }}
        >
          <div id="submenu_arrow" />
          <div id="submenu_box">
            <div id="submenu_box_title">{data[submenuIndex].page}</div>
            <div id="submenu_box_links">
              {data[submenuIndex].links.map((item) => (
                <button key={item.label} className="submenu_box_link">
                  <div className="submenu_box_icon">{item.icon}</div>
                  <div className="submenu_box_label">{item.label}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
{/* --------------------------------------------------------------------------------------------------*/}
      </ul>
      <button id="navbar_signin">Sign in</button>
      <button id="navbar_sidebar_toggle" onClick={() => changeSidebarActive("sidebar_container_open")}><FaBars /></button>
    </div>
  )
}

export default Navbar
