import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [Current, changeCurrent] = useState(0)

  const handleLeft = () => {
    if( Current > 0){
      changeCurrent(Current-1)
    } else {
      changeCurrent(people.length-1)
    }
  }

  const handleRight = () => {
    if (Current < people.length-1) {
      changeCurrent(Current + 1)
    } else {
      changeCurrent(0)
    }
  }

  const handleRandom = () => {
    var x = Current
    var y = Current
    while(x === y){
      x = Current
      y = Math.floor(Math.random() * people.length)

    } 
    changeCurrent(y)
  }
  
  return (
    <div id="box">
      <div id="circle" />

      
      
      <div id="img_container">
        <img id="img" src={people[Current].image} alt={people[Current].name}/>
        <div id="quote_icon_container">
          <FaQuoteRight id="quote_icon" />
        </div>
      </div>
      
      <div id="name">{people[Current].name}</div>
      <div id="job">{people[Current].job}</div>
      <div id="info">{people[Current].text}</div>
      <div id="arrows">
        <button id="arrow" onClick={handleLeft}><FaChevronLeft/></button>
        <button id="arrow" onClick={handleRight}><FaChevronRight/></button>
      </div>
      <button onClick={handleRandom} id="surprise">Surprise Me</button>
    </div>
  ) 
};

export default Review;
