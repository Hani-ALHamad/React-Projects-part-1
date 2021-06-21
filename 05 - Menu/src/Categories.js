import React from 'react';

const Categories = ({item, handleClick}) => {
  return <button onClick={() => handleClick(item)}>{item}</button>;
};

export default Categories;
