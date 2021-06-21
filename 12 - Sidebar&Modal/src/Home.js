import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { Context } from './context'

const Home = () => {
  const {changeModalToggle, changeSiderbarToggle} = useContext(Context)

  return (
    <div id="container">
      <button id="sidebar_toggle" onClick={() => changeSiderbarToggle("show")}><FaBars/></button>
      <button onClick={() => changeModalToggle(true)} id="modal_toggle">show modal</button>
    </div>
  )
}

export default Home
