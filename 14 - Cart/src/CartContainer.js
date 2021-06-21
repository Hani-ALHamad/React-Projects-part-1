import React from 'react'
import CartItem from './CartItem'
import { AppContext, useGlobalContext } from './context'

const CartContainer = () => {
  const { items, dispatch, total } = useGlobalContext(AppContext)

  return (
    <div id="cart_box">
      <h2 id="cart_title">your bag</h2>
      {items.length !== 0
        ?
      <>
        <div id="cart_items_box">
          {items.map((item) =>(
            <CartItem key={item.id} item={item}/>
          ))}
          
        </div>
        <hr/>
        <div id="cart_total_box">
          <p>Total</p>
          <p id="cart_total">${total}</p>
        </div>
        <button onClick={() => dispatch({type: "GET_DATA", data: []})} id="cart_clear">clear cart</button>
      </>
      :
      <div id="cart_empty_message">is currently empty</div>
    }
    </div>
  )
}

export default CartContainer
