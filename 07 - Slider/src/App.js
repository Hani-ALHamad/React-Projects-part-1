import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {
  const [currentIndex, changeIndex] = useState(0)
  const [prevIndex, changePrev] = useState(0)
  const [prevDirection, changePrevDirection] = useState("rightOut")
  const [direction , changeDirection] = useState("right")

  const handleLeft = () => {
    changeDirection("left")
    changePrevDirection("leftOut")
    changePrev(currentIndex)
    if(currentIndex === 0){
      changeIndex(data.length-1)
    } else {
      changeIndex(currentIndex - 1)
    }
    const leftClickTimeout = setTimeout(() => {
      changePrevDirection("leftOutNone")
    }, 500);
    return () => clearTimeout(leftClickTimeout)
  }

  const handleRight = () => {
    changeDirection("right")
    changePrevDirection("rightOut")
    changePrev(currentIndex)
    if(currentIndex === data.length-1){
      changeIndex(0)
    } else {
      changeIndex(currentIndex + 1)
    }
  }


  useEffect(() => {
    const time = setInterval(() => {
      handleRight()
    }, 5000);
    return () => clearInterval(time)
  },[currentIndex])
  
  console.log(currentIndex ,prevIndex ,direction)

  return (
    <div id="main">
      <div id="content">
        <div id="title">
          <p id="dash">/</p>
          <p id="word">Reviews</p>
        </div>
        <div className="box">
          <button className="arrow arrowLeft" onClick={handleLeft}><FiChevronLeft /></button>
          {data.map((item ,index) => (
            <div key={data[index].id} className={currentIndex === index ? direction : prevIndex === index ? prevDirection: "leftOutNone"}>
              <div className="items">
                <img src={data[index].image} alt={data[index].name} />
                <div className="name">{data[index].name}</div>
                <div className="title">{data[index].title}</div>
                <div className="quote">{data[index].quote}</div>
                <FaQuoteRight className="icon" />
              </div>
            </div>
          ))}
          
          <button className="arrow arrowRight" onClick={handleRight}><FiChevronRight /></button>
          </div>
      </div>
    </div>
  );
}

export default App;
