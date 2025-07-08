import React, { useState } from "react";
import * as SHOP_DATA from '../utils/shop-data.json'; 

export const ProductsContext = React.createContext({  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA.default || SHOP_DATA);

  const value = { products };

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
}