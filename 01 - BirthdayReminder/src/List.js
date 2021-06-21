import React from 'react';


const List = ({State}) => {
  return (
    <>
      {State.map((item) => (
        <div id="flexer" key={item.id}>
          <img src={item.image} alt={item.name}/>
          <div id="text_container">
            <div id="name">{item.name}</div>
            <div id="age">{item.age} years</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default List;
