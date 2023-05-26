// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0Y7iCB_eERU04NNchP_mCBDOQ4pn5JHY",
  authDomain: "mamun-recipe.firebaseapp.com",
  projectId: "mamun-recipe",
  storageBucket: "mamun-recipe.appspot.com",
  messagingSenderId: "392819488615",
  appId: "1:392819488615:web:473a1a0628e5b23f2de1c2"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export default app;