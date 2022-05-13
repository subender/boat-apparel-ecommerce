import { createContext , useEffect, useState} from "react";


const addCartItem =(cartItems, productToAdd)=>{

   const existingCartItem = cartItems.find(item =>productToAdd.id === item.id);

   if(existingCartItem){
    return cartItems.map(item => item.id === productToAdd.id ? {...item, quantity: item.quantity+1} : item
     )
   }

   return [...cartItems, {...productToAdd, quantity:1}]


}

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: ()=>{},
  cartItem:[],
  addItemToCart: ()=>{},
  cartCount:0,
})

export const CartProvider  = ({children})=>{

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, item)=> acc+item.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems])
  

  const addItemToCart = (productToAdd)=>{
     setCartItems( addCartItem(cartItems, productToAdd));
  }





  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount
  };

 return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
