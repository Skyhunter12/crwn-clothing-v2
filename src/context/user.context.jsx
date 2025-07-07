import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, createUserDocumentFromAuth } from "../utils/firebase/firebaseauth";
import {onAuthStateChangedProvider} from "../utils/firebase/firebaseauth";

export const UserContext = React.createContext({  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedProvider(user => {
      if (user) {
        console.log("User authenticated:", user);
        createUserDocumentFromAuth(user);
      }
      console.log("Current User in UserProvider: from context", user);
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}