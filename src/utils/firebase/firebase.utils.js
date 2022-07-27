import { initializeApp } from 'firebase/app'

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
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

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const addCollectionAndDocuments = async (
  collectionKey, 
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
}

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data()
    acc[title.toLowerCase()] = items;
    return acc;
  }, {})

  return categoryMap;


}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation ={}) => {
  if(!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef)

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName, 
        email, 
        createdAt,
        ...additionalInformation
      })
    }catch(err) {
      console.log("error creating the user", err.message)
    }
  }
  return userDocRef
}

export const creatAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password)
}
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password)
}
export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback)
