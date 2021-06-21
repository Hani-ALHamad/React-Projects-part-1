import React, { useContext } from 'react'
import logo from "./pages/data/fcc_secondary_large.svg"
import { FaTimes } from 'react-icons/fa'
import { AppContext } from './context'


const Nav = () => {
  const { closeNav, changeCloseNav } = useContext(AppContext)
  if(closeNav === true) {
    return <></>
  }

  return(
      <div id="nav_container">
        <p>I took the concept of these projects (except the last one) from <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer"><img id="nav_logo" src={logo} alt="logo" /></a>,
        then built them (both JS and CSS) in my own way without 
        seeing their final files.</p>
        <p>Projects article link:&ensp;
          <a href="https://www.freecodecamp.org/news/javascript-projects-for-beginners/" 
          target="_blank" rel="noreferrer">https://www.freecodecamp.org/news/javascript-projects-for-beginners/</a></p>
        <p>Projects link:&ensp;
          <a href="https://react-projects.netlify.app/"
          target="_blank" rel="noreferrer">https://react-projects.netlify.app/</a>
        </p>
        <div onClick={() => changeCloseNav(true)} id="nav_x"><FaTimes /></div>
      </div>
    )
}

export default Nav