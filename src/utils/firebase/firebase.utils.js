import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  Firestore
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJdjKB2bNiZz9gE17-9hu9qjwQeYlEq8Q",
  authDomain: "onk-clothing-db.firebaseapp.com",
  projectId: "onk-clothing-db",
  storageBucket: "onk-clothing-db.appspot.com",
  messagingSenderId: "359833026945",
  appId: "1:359833026945:web:5c0c0eaa6fc87ee1a96880"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt
      })
    }catch(err) {
      console.log("error creating the user", err.message)
    }
  }
  return userDocRef
  //if user data does not exist

  // 


}