import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const root = document.querySelector(':root')
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [items, dispatch] = useReducer(reducer, [0])
  const [total, changeTotal] = useState(0)

  const getData = async () => {
    const respond = await fetch(url)
    const jsoned = await respond.json()
    dispatch({type: "GET_DATA" , data: jsoned})
  }

  useEffect(()  => {
    getData()
  },[])

  useEffect(() =>{
    let x = 0
    let y = 0
    items.forEach(element => {
      x = x + element.amount
      y = y + Number(element.price*element.amount)
    });
    changeTotal(y.toFixed(2))
    root.style.setProperty("--count", x)
  }, [items])

  return (
    <AppContext.Provider
      value={{
        items,
        dispatch,
        total
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
