import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [State, changeState] = useState(data)
  const handleClick = () => {
    changeState([])
  }

  return(
    <div id="main">
      <div id="box">
        <h1>{State.length} birthdays today</h1>
        <List State={State}></List>
        <button onClick={handleClick}>Clear All</button>
      </div>
    </div>
  ) ;
}

export default App;
