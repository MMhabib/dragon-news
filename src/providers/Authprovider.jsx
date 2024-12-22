import { createContext, useState } from "react";
import auth from './../componets/Firebase/firebase.config';


export const AuthContext=createContext(null);



const Authprovider = ({children}) => {
const [user,setUser]=useState(null);

const createUSer=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}


const authInfo={
    user,
    createUSer
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;