// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAq8dMmJpJKZdiDGUT8UhvV7VH0YXi8rPs",
//   authDomain: "recipe4local.firebaseapp.com",
//   databaseURL: "https://recipe4local.firebaseio.com",
//   projectId: "recipe4local",
//   storageBucket: "recipe4local.firebasestorage.app",
//   messagingSenderId: "504105962588",
//   appId: "1:504105962588:web:1dea68667e199ea9cc2a99",
//   measurementId: "G-F6CJ83E25Y",
// };
const firebaseConfig = {
  apiKey: "AIzaSyBdhiZuM9rGBZeCp8lpFsbSQwgdrigYuDs",
  authDomain: "crwn-cart.firebaseapp.com",
  projectId: "crwn-cart",
  storageBucket: "crwn-cart.firebasestorage.app",
  messagingSenderId: "824460848550",
  appId: "1:824460848550:web:28b2a6e5bc854c845d7367",
  measurementId: "G-NFXZ33T8R8",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object?.title?.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("Batch write completed successfully");
};

export const createUserDocumentFromAuth = async (userAuth, additionalInfo) => {
  if (!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt: new Date(),
        ...additionalInfo,
      });
    } catch (error) {
      console.error("Error creating user document:", error);
    }
  }
};

export const signInWithGooglePopup = async () =>
  await signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = async () =>
  await signInWithRedirect(auth, googleProvider);

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};
export const signOutUser = async () => {
  return await signOut(auth);
};

export const onAuthStateChangedProvider = async (callback) => {
  onAuthStateChanged(auth, callback);
};

export const getcatalogAndDocuments = async (collectionKey) => {
  const collectionRef = collection(db, collectionKey);
  const q = query(collectionRef);
  const snapshot = await getDocs(q);
  const documents = snapshot.docs.reduce((acc, doc_snapshot) => {
    const { title, items } = doc_snapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return await documents;
};
