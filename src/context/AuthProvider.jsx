import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, deleteUser, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';
import { useEffect, useState } from 'react';

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }

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
        loading,
        createUser,
        signInUser,
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