import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({oneItem, handleEdit, handleDelete}) => {
  return (
    <div className="listItem">
      <p>{oneItem.item}</p>
      <button className="edit" onClick={() => handleEdit(oneItem)}><FaEdit/></button>
      <button className="trash" onClick={() => handleDelete(oneItem)}><FaTrash/></button>
    </div>
    )
}

export default List
