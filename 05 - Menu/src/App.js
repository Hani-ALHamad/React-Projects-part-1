import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
  const [current, changeCurrent] = useState(items)
  var categoriesList = ["All"]
  var displayed = items

  items.forEach(element => {
    if (!categoriesList.includes(element.category)) {
      categoriesList.push(element.category)
  }});

  const handleClick = (category) => {
    if(category !== "All") {
      displayed = items.filter(item => item.category === category)
      changeCurrent(displayed)
    } else {
      changeCurrent(items)
    }
  }
  

  return (
    <div id="main">
      <h2>Our Menu</h2>
      <div id="line" />
      <div id="categories">
        {categoriesList.map((item) =>(
          <Categories handleClick={handleClick} item={item}/>
        ))}
      </div>
      <div id="menu_container">
        {current.map((item) => (
          <Menu key={item.id} item={item}/>
        ))}
      </div>
    </div>

  )
}

export default App;
