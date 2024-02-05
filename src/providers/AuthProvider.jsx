import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const loginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email,password);
    }

    const googleLogin = ()=>{
        return signInWithPopup(auth,googleProvider);
    }

    const logOut =()=>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile =(name,photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    useEffect(()=>{
        const unSubcribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser);
            console.log("Current user",currentUser);
            // get and set jwt token
            if(currentUser){
                axios.post('https://e-restaurant.onrender.com/jwt',{email:currentUser.email})
                .then(data =>{
                    console.log("data from Axios",data.data.token)
                    localStorage.setItem('access-token',data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token');
            }

            
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
        googleLogin,
        logOut,
        updateUserProfile
        

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;