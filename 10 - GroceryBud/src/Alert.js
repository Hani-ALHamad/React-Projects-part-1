import React, { useEffect } from 'react'

const Alert = ({message, changeMessage}) => {
  useEffect(()=> {
    let time = setTimeout(() => {changeMessage({})}, 3000)
    return () => clearTimeout(time)
  },[message, changeMessage])

  return (
    <div id="alert" style={{background:`${message.color}`, color:`${message.bgcolor}`}}>{message.message}</div>
  )
}
export default Alert
