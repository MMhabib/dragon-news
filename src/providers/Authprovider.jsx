import { createContext } from "react";


export const AuthContext=createContext(null);

const authInfo={}

const Authprovider = ({children}) => {
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;