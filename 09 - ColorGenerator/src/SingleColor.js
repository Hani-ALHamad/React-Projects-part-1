import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'

const SingleColor = ({item, index, color}) => {
  const [copy, changeCopy] = useState(false)
  let oneColor = []
  let textColor = "black"
  

  const handleClick = (e) => {
    navigator.clipboard.writeText(hex)
    changeCopy(true)
    const interval = setTimeout(() => {
      changeCopy(false)
      clearTimeout(interval)
    }, 2500);
  }

  if(index < 11) {
    oneColor = color.tint(item).rgb
  } else {
    oneColor = color.shade(item).rgb
    textColor = "white"
  }

  let hex = rgbToHex(oneColor[0], oneColor[1], oneColor[2])

  return (
    <div onClick={handleClick} className="block" style={{
      color:`${textColor}` ,background: `rgb(${oneColor[0]}, ${oneColor[1]}, ${oneColor[2]})`
      }}>
      <div>{item}%</div>
      <div>{hex}</div>
      {copy === true ? <div className="copied">COPIED TO CLIPBOARD</div> : <></>}
    </div>
  )
}

export default SingleColor
