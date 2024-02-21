import { useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [onCartProducts, setOnCartProducts] = useState([]);
  const [callCart, setCallCart] = useState(false);
  const { data: session } = useSession();
  const uniqueId = session?.user?.email;

  useEffect(() => {
    const storedData = ls?.getItem(uniqueId);
    if (storedData) {
      setOnCartProducts(JSON.parse(storedData));
    }
  }, [ls, uniqueId]);

  useEffect(() => {
    if (onCartProducts?.length > 0) {
      ls?.setItem(uniqueId, JSON.stringify(onCartProducts));
    } else {
      ls?.removeItem(uniqueId); 
    }
  }, [onCartProducts, ls, uniqueId]);

  function addProduct(productId) {
    setOnCartProducts((prev) => [...prev, productId]);
    toast.success("Added to cart!");
  }

  function removeProduct(productId) {
    if (onCartProducts.length === 1) {
      ls.clear();
      setOnCartProducts((prev) => {
        const pos = prev.indexOf(productId);
        if (pos !== -1) {
          return prev.filter((value, index) => index !== pos);
        }
        return prev;
      });
    } else {
      setOnCartProducts((prev) => {
        const pos = prev.indexOf(productId);
        if (pos !== -1) {
          return prev.filter((value, index) => index !== pos);
        }
        return prev;
      });
    }
  }

  function clearCart() {
    setCallCart(true);
    // setOnCartProducts([]);
  }

  useEffect(() => {
    setOnCartProducts([]);
  },[callCart]);

  return (
    <CartContext.Provider
      value={{
        onCartProducts,
        setOnCartProducts,
        addProduct,
        removeProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
