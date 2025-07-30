import { combineReducers } from "redux";
import { cartReducer } from "./cart/cart.reducer";
import { userReducer } from "./user/user.reducer";
import { categoryReducer } from "./category/category.reducer";
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoryReducer,
  cart: cartReducer,
});
