import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import ContextFile from './context'

function App() {
  return (
    <ContextFile>
      <div id="container">
        <Navbar />
        <Hero />
        <Sidebar />
      </div>
    </ContextFile>
  )
}

export default App
