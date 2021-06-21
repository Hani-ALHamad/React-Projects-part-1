import React from 'react'
import { AppContext, useGlobalContext } from './context'
const CartItem = ({item, index}) => {
  const {dispatch} = useGlobalContext(AppContext)

  return (
    <div className="cart_item_container">
      <img className="cart_item_img" src={item.img}/>
      <div className="cart_item_details">
        <div className="cart_item_name">{item.title}</div>
        <div className="cart_item_price">${item.price}</div>
        <button onClick={() => dispatch({ type: "BUTTON_REMOVE", id: item.id})} className="cart_item_remove">remove</button>
      </div>
      <div className="cart_arrows_container">
        <button onClick={() => dispatch({type: "ARROW_ADD", id:item.id, amount: item.amount + 1})} className="cart_arrow">
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
          </svg>
        </button>
        <div className="cart_item_count">{item.amount}</div>
        <button onClick={() => dispatch({ type: "ARROW_REMOVE", id: item.id, amount: item.amount - 1 })} className="cart_arrow">
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
            <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default CartItem
