import React, { useState, createContext } from 'react'

export const Context = createContext()

const ContextFile = ({children}) => {
  const [submenuActive , changeSubmenuActive] = useState("none")
  const [submenuPosition, changeSubmenuPosition] = useState([0, 0])
  const [submenuIndex, changeSubmenuIndex] = useState(0)
  const [sidebarActive, changeSidebarActive] = useState("sidebar_container")
  
  return (
    <Context.Provider value={{ 
      changeSubmenuPosition, 
      changeSubmenuActive, 
      submenuActive, 
      submenuPosition, 
      submenuIndex, 
      changeSubmenuIndex,
      sidebarActive,
      changeSidebarActive
      }}>
    {children}
    </Context.Provider>
  )
}

export default ContextFile
