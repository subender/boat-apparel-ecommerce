import { async } from "@firebase/util";
import {initializeApp} from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCueGbAGigFqB4rdjyvM6xaRrsEkvbr3Ro",
  authDomain: "boat-apperel-ecom.firebaseapp.com",
  projectId: "boat-apperel-ecom",
  storageBucket: "boat-apperel-ecom.appspot.com",
  messagingSenderId: "708916191891",
  appId: "1:708916191891:web:136413c4d7e302a6dc6366"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  'prompt': 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider); 


export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInfo={})=>{
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if(!userSnapshot.exists()){
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      })
    }catch(error){
      console.log('errro creating the user', error.message);
    }
  }
  return userDocRef;
 
}

export const createAuthUserWithEmailAndPass = async (email, pass) =>{
  return await createUserWithEmailAndPassword(auth,email,pass);
}

