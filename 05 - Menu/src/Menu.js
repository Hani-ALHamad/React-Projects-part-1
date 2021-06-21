import React from 'react';

const Menu = ({item}) => {
  return (
    <div id="box">
      <div id="item">
      <div id="flex_row">
        <img src={item.img} alt={item.title}/>
        <div id="text_block">
          <div id="title_price">
            <div id="title">{item.title}</div>
            <div id="price">${item.price}</div>
          </div>
          <div id="dotted" />
          <div id="desc">{item.desc}</div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Menu;
