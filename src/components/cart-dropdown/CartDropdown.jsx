import './CartDropdown.styles.scss'
import Button from '../button/Button'
import React from 'react'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-item" />
      <Button>Check Out</Button>
    </div>
  )
}

export default CartDropdown