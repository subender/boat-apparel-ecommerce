import { createContext, useEffect, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (item) => productToAdd.id === item.id
  );

  if (existingCartItem) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, itemToRemove) => {
  const existingItem = cartItems.find((item) => itemToRemove.id === item.id);

  if (existingItem.quantity === 1) {
   return cartItems.filter((item) => item.id !== itemToRemove.id);
  }

 return cartItems.map((item) => {
    return item.id === itemToRemove.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};

const clearItemFromCart = (cartItems, cartItemToRemove)=>{
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id); 
}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItem: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeItemFromCart: () => {},
  clearCartItem: ()=>{},
  cartTotal:0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (acc, item) => acc + item.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);


  useEffect(() => {
      const newCartTotal = cartItems.reduce((acc, item)=> acc + item.quantity * item.price, 0);
      setCartTotal(newCartTotal);
  }, [cartItems])
  

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (itemToRemove) => {
    setCartItems(removeCartItem(cartItems, itemToRemove));
  };

  const clearCartItem =(itemToRemove)=>{
    setCartItems( clearItemFromCart(cartItems , itemToRemove));
  }

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearCartItem,
    cartTotal
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
