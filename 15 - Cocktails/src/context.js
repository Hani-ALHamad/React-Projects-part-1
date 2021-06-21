import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [text, handleTextChange] = useState("")
  const [data, changeData] = useState([])
  const [currentItem, changeCurrentItem] = useState([])
  const [isLoading, changeIsLoading] = useState(false)
  const [error , changeError] = useState(false)

  const getData = useCallback(async () => {
    changeIsLoading(true)
    const response = await fetch(url + text)
    const jsoned = await response.json()

    if(jsoned.drinks !== null){
      changeData(jsoned.drinks)
      changeIsLoading(false)
      changeError(false)
    } else {
      changeError(true)
    }
  },[text])

  useEffect(() => {
    getData()
  },[text ,getData])

  return <AppContext.Provider value={{text, 
    handleTextChange, 
    isLoading, 
    changeIsLoading, 
    data, 
    currentItem, 
    changeCurrentItem, 
    error}}>{children}</AppContext.Provider>
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
