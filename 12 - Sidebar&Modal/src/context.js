import React, { useState, useContext, createContext } from 'react'

export const Context = createContext()

const SidebarModalContext = ({children}) => {
    const [sidebarToggle, changeSiderbarToggle] = useState("default")
    const [modalToggle, changeModalToggle] = useState(false)

    return (
        <Context.Provider value={{modalToggle, sidebarToggle, changeSiderbarToggle, changeModalToggle}}>
            {children}
        </Context.Provider>
    )
}

export default SidebarModalContext