import React from 'react';
import Tour from './Tour';
const Tours = ({State}) => {

  return (
    <>
      {State.map((item) => (
          <Tour key={item.id} State={State} value={item}/>
      ))}
    </>
  )
};

export default Tours;
