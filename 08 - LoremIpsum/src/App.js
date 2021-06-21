import React, { useState } from 'react';
import data from './data';
function App() {
  const [currentNumber, changeNumber] = useState(0)
  const [currentData , changeData] = useState([])

  const length = (e) => {
    e.preventDefault()
    let items = []
    if(currentNumber > 0) {
      items = data.slice(0, currentNumber)
      changeData(items)
    } else {
      changeData([data[0]])
    }
  }

  return (
    <div id="container">
      <div id="box">
        <div id="title">TIRED OF BORING LOREM IPSUM?</div>
        <form >
          <label htmlFor="number">Paragraphs:</label>
          <input type="number" id="number" name="number"  value={currentNumber} onChange={e => changeNumber(e.target.value)}/>
          <input type="submit" id="button" value="Generate" onClick={e => length(e)}/>
        </form>
        <div id="paraghraphs">
          {currentData.map((item, index) => (
            <div key={index} className="paragraph">{item}</div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default App;
