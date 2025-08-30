import React, { createContext, useState } from 'react';

// Create context
export const ProductsContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [wishList, setWishList] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);

  const toggleFavorite = (product) => {
    setWishList((prev) => {
      const isFavorited = prev.find((item) => item.id === product.id);
      if (isFavorited) {
        console.log("14line",product)
        return prev.filter((item) => item.id !== product.id); // remove from wishlist
      } else {
        console.log("17line",product)
        return [...prev, product]; 
        // add to wishlist
      }
    });
  };

  const addToCartProduct=(product)=>{
    const existingProduct=cartProduct.find((item)=>item.id===product.id);
    if(existingProduct){
      setCartProduct(
        cartProduct.map((items)=>items.id===product.id ? {...items,quantity:items.quantity+1}:items)
      )
    }else{
      setCartProduct((prevCart)=>[...prevCart,{...product,quantity:1}])
    }
  }

  return (
    <ProductsContext.Provider value={{ wishList, cartProduct, toggleFavorite,addToCartProduct }}>
      {children}
    </ProductsContext.Provider>
  );
};
