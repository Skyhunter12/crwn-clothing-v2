import { createContext, useEffect, useState } from "react";

const addToCartItem = (cartItems, product) => {
  // This function will be used to add products to the cart
  // Implementation will be added later

  // If there are multiple items, we can check if the product is already in the cart
  const existingProduct = cartItems.find((item) => item.id === product.id);
  console.log("Existing Product:", existingProduct);
  if (existingProduct) {
    // If the product is already in the cart, we can update its quantity

    return cartItems?.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  } else {
    // If the product is not in the cart, we can add it
    return [...cartItems, { ...product, quantity: 1 }];
  }

  //   if (product is already in cart) {

  //   return products
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalCount: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);
  const addItemToCart = (productToAdd) =>
    setCartItems(addToCartItem(cartItems, productToAdd));

  const removeItem = (cartItems, productToRemove) => {
    const existingProduct = cartItems.find(
      (item) => item.id === productToRemove.id
    );
    if (existingProduct?.quantity === 1) {
      return cartItems.filter((item) => item.id !== productToRemove.id);
    } else {
      return cartItems.map((item) =>
        item.id === productToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (cartItem) => {
    setCartItems(cartItems.filter((item) => item.id !== cartItem.id));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    totalCount: cartItems?.reduce((total, item) => total + item.quantity, 0),
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
