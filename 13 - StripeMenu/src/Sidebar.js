import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import { Context } from './context'

const Sidebar = () => {
  const { changeSidebarActive, sidebarActive } = useContext(Context)

  return (
      <div id={sidebarActive}>
        <div id="sidebar_box">
        <button id="sidebar_x" onClick={() => changeSidebarActive("sidebar_container_closed")}><FaTimes/></button>
            {sublinks.map((item) =>(
              <div key={item.page} className="sidebar_page">
                <div className="sidebar_title">{item.page}</div>
                  <div className="sidebar_links_container">
                    {item.links.map((element) => (
                      <a href={element.url} key={element.label} className="sidebar_one_link_container">
                        <div className="sidebar_link_icon">{element.icon}</div>
                        <div className="sidebar_link_label">{element.label}</div>
                      </a>
                    ))}
                  </div>
              </div>
            ))}
        </div>
      </div>
  )
}

export default Sidebar
