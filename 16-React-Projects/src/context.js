import React, {useState, createContext} from 'react'

export const AppContext = createContext()

const Context = ({children}) => {
  const [closeNav, changeCloseNav] = useState(false)
  const [currentIndex, changeCurrentIndex] = useState("")

return (
  <AppContext.Provider value={{
    closeNav, 
    changeCloseNav, 
    currentIndex, 
    changeCurrentIndex
    }}>
    {children}
  </AppContext.Provider>
)
}
export default Context