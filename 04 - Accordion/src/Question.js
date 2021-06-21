import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({item}) => {
  const [Toggle, changeToggle] = useState(false)
  
  const handleClick = () => {
    changeToggle(!Toggle)
  }

  return (
        <li >
          <div id="list_top">
          <div id="title">{item.title}</div>
          <div>
            <button onClick={handleClick} id="button">{Toggle === false ? <AiOutlinePlus /> : <AiOutlineMinus />}</button>
          </div>
          </div>
          {Toggle === true ? <div id="info">{item.info}</div> : <></>}
        </li>
  );
};

export default Question;
