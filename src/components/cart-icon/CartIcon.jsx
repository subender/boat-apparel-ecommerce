import React, { useContext } from 'react'
import './CartIcon.styles.scss';
import { CartContext } from '../../context/CartContext';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'



const CartIcon = () => {
  const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);

  const dropdownHandler = ()=> setIsCartOpen(!isCartOpen);

 


  return (
    <div className='cart-icon-container' onClick={dropdownHandler}>
      <ShoppingIcon className='shopping-icon' />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon