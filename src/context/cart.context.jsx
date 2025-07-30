import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";

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

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartTotal: 0,
  totalCount: 0,
};
export const CartActionTypes = {
  SET_CART_NEW_ITEMS: "SET_CART_NEW_ITEMS",
  SET_CART_OPEN: "SET_CART_OPEN",
};
export const CartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case CartActionTypes.SET_CART_NEW_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CartActionTypes.SET_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, INITIAL_STATE);
  const { cartItems, cartTotal, isCartOpen } = state;

  const removeItem = (cartItems, productToRemove) => {
    // This function will be used to remove products from the cart
    const existingProduct = cartItems.find(
      (item) => item.id === productToRemove.id
    );
    if (existingProduct.quantity === 1) {
      // If the quantity is 1, we remove the item from the cart
      return cartItems.filter((item) => item.id !== productToRemove.id);
    } else {
      // If the quantity is more than 1, we reduce the quantity
      return cartItems.map((item) =>
        item.id === productToRemove.id
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
    }
  };
  const updateCartItemsReducer = (newCartItems) => {
    const newTotalCount = newCartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
    dispatch(
      createAction(CartActionTypes.SET_CART_NEW_ITEMS, {
        cartItems: newCartItems,
        totalCount: newTotalCount,
        cartTotal: newCartTotal,
      })
    );
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeItem(cartItems, productToRemove);
    updateCartItemsReducer(newCartItems);
  };

  const clearItemFromCart = (cartItem) => {
    const newCartItems = cartItems.filter((item) => item.id !== cartItem.id);
    updateCartItemsReducer(newCartItems);
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addToCartItem(cartItems, productToAdd);
    updateCartItemsReducer(newCartItems);
  };

  const setIsCartOpen = (isOpen) => {
    dispatch(createAction(CartActionTypes.SET_CART_OPEN, isOpen));
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
