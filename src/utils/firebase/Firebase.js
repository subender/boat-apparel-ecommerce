import { initializeApp } from "firebase/app";
import {
  getAuth,
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
  getDocs
} from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCueGbAGigFqB4rdjyvM6xaRrsEkvbr3Ro",
  authDomain: "boat-apperel-ecom.firebaseapp.com",
  projectId: "boat-apperel-ecom",
  storageBucket: "boat-apperel-ecom.appspot.com",
  messagingSenderId: "708916191891",
  appId: "1:708916191891:web:136413c4d7e302a6dc6366",
};

// Initialize Firebase
 initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const addCollectionAndDocumenta = async (collectionKey, objectsToAdd)=>{
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
}

export const getCategoriesAndDocuments = async ()=>{
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);
  const querySnapshot = await getDocs(q);

  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot)=>{
    const {title, items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});

  return categoryMap;

}

export const createUserDocFromAuth = async (userAuth, additionalInfo = {}) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("errro creating the user", error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPass = async (email, pass) => {
  if (!email || !pass) return;
  return await createUserWithEmailAndPassword(auth, email, pass);
};

export const signInAuthUserWithEmailAndPass = async (email, pass) => {
  if (!email || !pass) return;
  return await signInWithEmailAndPassword(auth, email, pass);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback)=> onAuthStateChanged(auth, callback );