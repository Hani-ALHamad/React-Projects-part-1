import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  const [data, setData] = useState("")
  const [currentTab , changeTab] = useState(0)

  const getData = async () => {
    const response = await fetch(url)
    const fetchedData = await response.json()
    setData(fetchedData)
  }

  const handleClick = (e) => {
    changeTab(data.length - e)
  }

  useEffect(() => {
    getData()
  }, [])
  
  return (
    <div id="main">
      {data === "" ? <h2 id="loading">Loading...</h2>
      :
      <>
        <h2>Experience</h2>
        <div id="line" />
        <div id="content">
          <div id="list">
            {data.map((item) => (
              <div key= { item.id }>{item.company === data[currentTab].company
                ? 
              <button onClick={() => handleClick(item.order)}className="company" id="active" >{item.company}</button>
              :
              <button onClick={() => handleClick(item.order)} className="company">{item.company}</button>
              }
              </div>
            ))}
          </div>
          <div id="posts">
            <div id="article">
              <div id="title">{data[currentTab].title}</div>
              <div id="company">{data[currentTab].company}</div>
              <div id="date">{data[currentTab].dates}</div>
              {data[currentTab].duties.map((item) => (
                <div className="duties">
                  <FaAngleDoubleRight className="icon"/>
                  <div className="duty">{item}</div>
                </div>
                ))}
              
            </div>
          </div>
        </div>
        <button id="more">MORE INFO</button>
      </>
      }
    </div>
  )
}

export default App
