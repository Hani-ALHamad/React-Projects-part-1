import React, { useContext } from 'react'
import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'
import { Context } from './context'

const Sidebar = () => {
  const { sidebarToggle, changeSiderbarToggle } = useContext(Context)

  return (
    <div className={sidebarToggle}>
      <div id="sidebar_title">
        <img id="sidebar_title_img" src={logo} />
        <button onClick={() => changeSiderbarToggle("hide")} id="sidebar_title_x"><FaTimes /></button>
      </div>
      <div id="sidebar_links">
        {links.map((item) => (
          <a key={item.id} className="link" href={item.url}>
            <div className="link_icon">{item.icon}</div>
            <div className="link_text">{item.text}</div>
          </a>
        ))}
      </div>
      <div id="sidebar_social">
        {social.map((item) =>(
          <a key={item.id} className="social" href={item.url}>{item.icon}</a>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
