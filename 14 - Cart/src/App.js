import React from 'react'
import { AppContext, useGlobalContext } from './context'

// components
import Navbar from './Navbar'
import CartContainer from './CartContainer'
// items

function App() {
  const {items} = useGlobalContext(AppContext)
  if(items[0] === 0) {
    return (
      <main>
        <div id="loading">Loading...</div> 
      </main>
    )
  }

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}

export default App
