import React, { useState } from 'react';

const Tour = ({State , value}) => {
  const [readMore, toggleReadMore] = useState(false)
  const handleRemove = (e) => {
    const Index = State.findIndex(Item => Item.id === value.id)
    State.splice(Index, 1)
  }

  const handleReadMore = () => {
    toggleReadMore(!readMore)
  }

  return(
    <div id="box">
      <div id="img_c">
        <img src={value.image} id="img" alt={value.name}/>
      </div>
      <div id="padding">
      <div id="row">
        <div id="name">{value.name}</div>
        <div id="price">${value.price}</div>
      </div>
        <span id="info">{value.info.length >= 200 && readMore === false ? <>{value.info.substr(0, 200)} ...<button id="more_less" onClick={handleReadMore}>Read More</button></> : <>{value.info}</>}</span>
        <>{readMore === true ? <button id="more_less" onClick={handleReadMore}>Show Less</button> : <></>}</>
        <div id="deleteDiv">
          <button id="remove" onClick={handleRemove}>Not Interested</button>
        </div>
      </div>
    </div>
  ) 
};

export default Tour;
