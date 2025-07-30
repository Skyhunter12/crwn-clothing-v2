import { CartActionTypes } from "./cart.types";
import { createAction } from "../../../utils/reducer/reducer.utils";

export const SetIsCartOpen = (isOpen) => {
  return createAction(CartActionTypes.SET_CART_OPEN, isOpen);
};
const addToCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems?.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeItem = (cartItems, productToRemove) => {
  console.log("product to remove", cartItems[0]);

  const existingCartItem = cartItems?.find(
    (cartItem) => cartItem.id === productToRemove.id
  );

  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }

  // return back cartitems with matching cart item with reduced quantity
  return cartItems?.map((cartItem) =>
    cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export const clearItemFromCart = (cartItems, cartItem) => {
  const newCartItems = cartItems.filter((item) => item.id !== cartItem.id);
  return createAction(CartActionTypes.SET_CART_NEW_ITEMS, newCartItems);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addToCartItem(cartItems, productToAdd);
  return createAction(CartActionTypes.SET_CART_NEW_ITEMS, newCartItems);
};
export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeItem(cartItems, productToRemove);
  return createAction(CartActionTypes.SET_CART_NEW_ITEMS, newCartItems);
};
