import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
  const [currentColor, changeColor] = useState("#f15025")
  const [input, changeInput] = useState("")
  const [border, changeBorder] = useState("transparent")
  let color = ""

  const handleSubmit = e => {
    e.preventDefault()
    try {
      color = new Values(input)
      changeColor(input)
      changeBorder("transparent")
    } catch {
      color = new Values(currentColor)
      changeBorder("#cc0000")
    }
  }
  color = new Values(currentColor)
  const List = [
    100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 
    0, 10, 20, 30, 40, 50, 60, 70, 
    80, 90, 100]

  return (
    <div id="main">
      <div id="top">
        <h2>Color Generator</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" id="text_input" value={input} 
          onChange={e => changeInput(e.target.value)}
          style={{border:`2px solid ${border}`}} placeholder="#f15025"/>
          <input type="submit" id="button" value="Submit" />
        </form>
      </div>

        <div id="color_container">
          {List.map((item, index) => (
            <SingleColor key={item+index} item={item} index={index} color={color}/>
          ))}
        </div>
    </div>
  )
}

export default App