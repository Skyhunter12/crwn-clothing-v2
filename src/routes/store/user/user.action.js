import { createAction } from "../../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const checkUserSession = () => {
  return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
};
export const googleSignInStart = () => {
  return createAction(USER_ACTION_TYPES.GOOGLE_SIGNIN_START);
};
export const emailSignInStart = (email, password) => {
  return createAction(USER_ACTION_TYPES.EMAIL_SIGNIN_START, {
    email,
    password,
  });
};
export const signInSuccess = (user) => {
  return createAction(USER_ACTION_TYPES.SIGNIN_SUCCESS, user);
};
export const signInFailure = (error) => {
  return createAction(USER_ACTION_TYPES.SIGNIN_FAILURE, error);
};

export const signUpStart = (email, password, displayName) => {
  return createAction(USER_ACTION_TYPES.SIGNUP_START, {
    email,
    password,
    displayName,
  });
};

export const signUpSuccess = (user, otherDetails) => {
  return createAction(USER_ACTION_TYPES.SIGNUP_SUCCESS, { user, otherDetails });
};

export const signUpFailure = (error) => {
  return createAction(USER_ACTION_TYPES.SIGNUP_FAILURE, error);
};

export const signOutStart = () => {
  return createAction(USER_ACTION_TYPES.SIGNOUT_START);
};
export const signOutSuccess = () => {
  return createAction(USER_ACTION_TYPES.SIGNOUT_SUCCESS);
};
export const signOutFailure = (error) => {
  return createAction(USER_ACTION_TYPES.SIGNOUT_FAILURE, error);
};
