
import React, { createContext, useContext, useState, useEffect, } from "react";

const CartContext = createContext ()

export const CartProvider = ({children}) => {
  const [cartItems, setCartItems] = useState (() => {
    const savedCart = localStorage.getItem ('pinkiCart');
    return savedCart? JSON.parse (savedCart) : [];
  })

  useEffect (() => {
    localStorage.setItem ('pinkiCart', JSON.stringify (cartItems))
  }, [cartItems] );

  const addToCart = (product) => {

    if (product.stock <= 0) {
      alert ("این محصول در حال حاضر ناموجود است🌸");
      return;
    }

    setCartItems ((prevItems) => {
      const isExist = prevItems.find ((item) => item.id === product.id);

      if (isExist) {
        if (isExist.quantity < product.stock) {
          return prevItems.map ((item) => item.id === product.id ? {... item, quantity: item.quantity + 1} : item);
        }
        else {
          alert(` متأسفیم! فقط ${product.stock} عدد از این محصول در انبار موجود است. 🎀`);
          return prevItems;
        }

      }
      else {
        return [... prevItems, {... product, quantity: 1}]
      }
    })

  }

  const removeFromCart = (productId) => {
    setCartItems ((prevItems) => {
      const item = prevItems.find ((i) => i.id === productId);

      if (item && item.quantity === 1) {
        return prevItems.filter (i => i.id !== productId) 
      }
      return prevItems.map (i => i.id === productId ? {... i, quantity: i.quantity - 1} : i)
    })

  }

   const deleteItem = (productId) => {
   setCartItems((prevItems) => prevItems.filter((i) => i.id !== productId));
   };

  const clearCart = () => {
    setCartItems ([]);
    localStorage.clear ('pinkiCart')
  }

  return (

  <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, deleteItem, clearCart }}>
      {children}
  </CartContext.Provider>

) 
}



export const useCart = () => useContext (CartContext)
