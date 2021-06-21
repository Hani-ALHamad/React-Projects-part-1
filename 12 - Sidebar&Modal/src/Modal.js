import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Context } from './context'
const Modal = () => {
  
  const {modalToggle, changeModalToggle} = useContext(Context)
  
  return (
    <>
    {modalToggle === true 
    ?
    <div id="modal_container">
      <div id="modal_box">
        <button id="modal_x" onClick={() => changeModalToggle(false)}><FaTimes /></button>
        <div id="modal_content">
          <h3>
            Modal Content
          </h3>
        </div>
      </div>
    </div>
    :
    <></>
    }

    </>
  )
}

export default Modal
