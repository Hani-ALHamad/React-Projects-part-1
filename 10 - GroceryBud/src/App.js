import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [currentText, handleTextChange] = useState("")
  const [data, changeData] = useState([])
  const [isEditing, changeIsEditing] = useState(false)
  const [currentId, changeCurrentId] = useState(0)
  const [message, changeMessage] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()
    if(currentText !== "") {
      const id = Math.floor((Math.random() * 10000000000))
      data.push({ id: id, item: currentText })
      localStorage.setItem("localData", JSON.stringify(data))
      handleTextChange("")
      changeMessage({ message: "Item Added To The List", bgcolor: "#155724", color:"#d4edda"})
    } else {
      changeMessage({ message: "Please Enter Value", bgcolor: "#721c24", color:"#f8d7da" })
    }
  }

  const handleClear = () => {
    changeData([])
    localStorage.removeItem("localData")
    changeMessage({ message: "Empty List", bgcolor: "#721c24", color: "#f8d7da" })
  }

  const handleEdit = (oneItem) => {
    changeIsEditing(true)
    handleTextChange(oneItem.item)
    changeCurrentId(oneItem.id)
  }

  const handleEditSubmit = (e) => {
    e.preventDefault()
    data.forEach(element => {
      if(element.id === currentId){
        element.item = currentText
      }
    });
    localStorage.setItem("localData", JSON.stringify(data))
    changeIsEditing(false)
    changeCurrentId(0)
    handleTextChange("")
    changeMessage({ message: "Value Changed", bgcolor: "#155724", color: "#d4edda" })
  }

  const handleDelete = (oneItem) => {
    const filteredData = data.filter(task => task.id !== oneItem.id)
    changeData(filteredData)
    localStorage.setItem("localData", JSON.stringify(filteredData))
    changeMessage({ message: "Item Removed", bgcolor: "#721c24", color: "#f8d7da" })
  }

  useEffect(() => {
    if(localStorage.getItem("localData")){
      changeData(JSON.parse(localStorage.getItem("localData")))
    }
  }, [])



  return (
    <div id="main">
      <div id="container">
        <Alert message={message} changeMessage={changeMessage}/>
        <h2>Grocery Bud</h2>
        {isEditing === true 
        ? 
          <form onSubmit={handleEditSubmit}>
            <input autoComplete="off" type="text" id="textBox" placeholder="e.g. eggs" value={currentText} onChange={e => handleTextChange(e.target.value)} />
            <input type="submit" id="submit" value="Edit" />
          </form>
          :
          <form onSubmit={handleSubmit}>
            <input autoComplete="off" type="text" id="textBox" placeholder="e.g. eggs" value={currentText} onChange={e => handleTextChange(e.target.value)} />
            <input type="submit" id="submit" value="Submit" />
          </form>
        }

        <div id="list">
          {data.map((oneItem) =>(
            <List key={oneItem.id} oneItem={oneItem} handleEdit={handleEdit} handleDelete={handleDelete}/>
          ))}
        </div>
        {data.length !== 0 ? <button onClick={handleClear} id="clear">Clear Items</button> : <></>}
      </div>
    </div>
  )
}

export default App
