import { createContext } from "react";
import { USER_ACTION_TYPES } from "./user.types";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGNIN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        isLoading: false,
      };
    case USER_ACTION_TYPES.SIGNIN_FAILURE:
    case USER_ACTION_TYPES.SIGNUP_FAILURE:
    case USER_ACTION_TYPES.SIGNOUT_FAILURE:
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
