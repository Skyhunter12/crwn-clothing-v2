// import { useEffect, useReducer } from "react";
// import { createUserDocumentFromAuth } from "../utils/firebase/firebaseauth";
// import { onAuthStateChangedProvider } from "../utils/firebase/firebaseauth";
// import { USER_ACTION_TYPES } from "../routes/store/user/user.types";
// import { setCurrentUser } from "../routes/store/user/user.reducer";

// import { UserContext } from "./user.context";


// const initialState = {
//   currentUser: null,
// };

// export const UserProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, initialState);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangedProvider((user) => {
//       if (user) {
//         console.log("User authenticated:", user);
//         createUserDocumentFromAuth(user);
//       }
//       console.log("Current User in UserProvider: from context", user);
//       setCurrentUser(user);
//     });

//     return unsubscribe;
//   }, []);

//   const value = { currentUser: state.currentUser, setCurrentUser };

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// export const userReducer = (state, action) => {
//   let { type, payload } = action;
//   switch (type) {
//     case USER_ACTION_TYPES.SET_CURRENT_USER:
//       return {
//         ...state,
//         currentUser: payload,
//       };
//     default:
//       return state;
//   }
// };
