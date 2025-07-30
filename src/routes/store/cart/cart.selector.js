import { createSelector } from "reselect";

export const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen || false
);

export const selectCartCount = createSelector([selectCartItems], (cart) => {
  console.log("selectCartCount cart:", cart);
  return cart?.reduce((total, item) => {
    console.log("selectCartCount item:", item);
    return total + item.quantity;
  }, 0);
});

export const selectCartTotal = createSelector([selectCartItems], (cart) => {
  return cart?.reduce((total, item) => total + item.quantity * item.price, 0);
});
