import React, { useState } from 'react';
import data from './data';
import Question from './Question';
function App() {
  return (
      <div id="box">
        <h2>Questions And Answers About Login</h2>
        <ul id="ul">
          {data.map((item) => (
            <Question key={item.id} item={item} />
          ))}
          </ul>
      </div>
  )
}

export default App;
