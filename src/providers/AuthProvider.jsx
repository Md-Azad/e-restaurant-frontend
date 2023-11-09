import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const lotOut =()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log("Current user",currentUser);
            setLoading(false);
        });
            return () =>{
                return unSubcribe();
            }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        lotOut,
        name

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;