import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, deleteUser, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut  } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { useEffect, useState } from 'react';


const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
         setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
         setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
          
    };

    const deleteSingleUser = () =>{
        return deleteUser(auth.currentUser);
    } 

    const signOutUser = () => {
        return signOut(auth);
    }

    // Firebase auth state change
     useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unSubscribe();
    }, []);


     const userInfo = {
         user,
         setUser,
        loading,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        deleteSingleUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;