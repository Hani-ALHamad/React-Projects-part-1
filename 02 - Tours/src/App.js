import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [State , changeState] = useState("")
  const [Changed , changeChanged] = useState(false)
  const [Click , changeClick] = useState(false)

  const handleClick = async () => {
    const Fetching = await fetch(url)
    const Data = await Fetching.json()
    changeState(Data)
  }

  useEffect(() =>{
    changeState("")
    handleClick()
  }, [Changed])

  React.useEffect(() => {
    document.addEventListener("click", ClickListener);
    return () => document.removeEventListener("click", ClickListener)
  }, [Click])

  const ClickListener = () => {
    changeClick(!Click)
  }

  return (
    <div className="main">
      {State === "" ? <Loading /> 
      :
      <>

          {State.length === 0 
          ?
          <>
            <h2>No Tours Left</h2>
            <button id="refresh" onClick={() => changeChanged(!Changed)}>Refresh</button> 
          </>
          :
          <>
            <h2>Our Tours</h2>
            <div id="line" />
            <Tours State={State} onClick={() => changeChanged(!Changed)} />
          </>}
      </>
      }
    </div>
  )
}

export default App
