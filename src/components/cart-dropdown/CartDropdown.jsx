import './CartDropdown.styles.scss'
import Button from '../button/Button'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import CartItem from '../cart-item/CartItem'
import { useNavigate } from 'react-router-dom'

const CartDropdown = () => {

  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate();

  const checkoutHandler = ()=>{
    navigate('/checkout')
  }
 
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items">
      {cartItems.map(item =>(
        <CartItem key={item.id} cartItem={item} />
      ))
      
      }
      </div>

      <Button onClick={checkoutHandler}>Check Out</Button>
    </div>
  )
}

export default CartDropdown