import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import app from './../componets/Firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
   const unSubscribe= onAuthStateChanged(auth,currentUser=>{
    console.log('user hcanged in auth sate',currentUser);
setUser(currentUser);
    })
    return ()=>{
      unSubscribe();
    }
  },[])
const logOut=()=>{
return signOut(auth);

}

const signIn=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password);
}
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const authInfo = {
    user,
    signIn,
    logOut,
    createUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
