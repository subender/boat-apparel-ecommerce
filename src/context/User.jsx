import React from 'react'
import { createContext,  useState, useEffect } from 'react'
import { onAuthStateChangedListner, createUserDocFromAuth } from '../utils/firebase/Firebase';




export const UserContext = createContext({
    currentUser: null,
    setCurrentUser:()=> null,
});

export const UserProvider = ({children})=>{

  const [currentUser, setCurrentUser] = useState(null);
  const value = {currentUser, setCurrentUser}


  useEffect(() => {
    
  const unsubcribe = onAuthStateChangedListner((user)=>{
    if(user){
       createUserDocFromAuth(user);
    }
    setCurrentUser(user)
  })
    return unsubcribe;
  }, [])
  

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
