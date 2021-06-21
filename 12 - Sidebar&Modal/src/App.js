import React, { useContext } from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import SidebarModalContext from './context'

function App() {

  return (
    <SidebarModalContext>
      <Modal/>
      <Home/>
      <Sidebar />
    </SidebarModalContext>

  )
}

export default App
