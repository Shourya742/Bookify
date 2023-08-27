import { createContext, useContext } from "react";
import { initializeApp } from "firebase/app";

const FirebaseContext = createContext(null);
export const useFirebase = () => useContext(FirebaseContext);

const firebaseConfig = {
  apiKey: "AIzaSyCzZtM9e-zyMJQG26qEF6_RqolPOQXy1fs",
  authDomain: "bookify-85977.firebaseapp.com",
  projectId: "bookify-85977",
  storageBucket: "bookify-85977.appspot.com",
  messagingSenderId: "365343539726",
  appId: "1:365343539726:web:47e7475b070d5353a6b25f",
};

const firebaseApp = initializeApp(firebaseConfig);

export const FirebaseProvider = (props) => {
  return <FirebaseContext.Provider>{props.children}</FirebaseContext.Provider>;
};
