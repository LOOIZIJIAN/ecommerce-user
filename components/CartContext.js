import {createContext, useEffect, useState} from "react";
import toast from "react-hot-toast";

export const CartContext = createContext({});

export function CartContextProvider({children}) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [onCartProducts, setOnCartProducts] = useState([]);
  
  useEffect(() => {
    if (onCartProducts?.length > 0) {
      ls?.setItem('cart', JSON.stringify(onCartProducts));
    }
  }, [onCartProducts]);

  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setOnCartProducts(JSON.parse(ls.getItem('cart')));
    }
  }, []);

  function addProduct(productId) {
    setOnCartProducts(prev => [...prev,productId]);
    toast.success("Added to cart!");
  }
  function removeProduct(productId) {
    setOnCartProducts(prev => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value,index) => index !== pos);
      }
      return prev;
    });
  }
  
  function clearCart() {
    setOnCartProducts([]);
  }

  return (
    <CartContext.Provider value={{onCartProducts,setOnCartProducts,addProduct,removeProduct,clearCart}}>
      {children}
    </CartContext.Provider>
  );
}