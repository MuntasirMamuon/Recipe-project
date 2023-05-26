import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';
import { handler } from 'daisyui';
import { Navigate } from 'react-router-dom';

export const AuthContext=createContext(null);
 const auth=getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const [name,setName]=useState('');

    const googleProvider=new GoogleAuthProvider();
    const githubProvider=new GithubAuthProvider();

    const handlerGoogleSignIn=()=>{
     setLoading(true);
     
     return signInWithPopup(auth,googleProvider);
     
    }

    const handlerGithubSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth,githubProvider)
    }
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)

    }

  const SignIn=(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);

  }  
  
  const loggedOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
    const unSubscribe=onAuthStateChanged(auth,loggedUser=>{
        setUser(loggedUser)
        setLoading(false)
    })
    return()=>{
        unSubscribe();
    }
  },[])

  const authInfo={
    user,
    loading,
    loggedOut,
    SignIn,
    createUser,
    handlerGithubSignIn,
    handlerGoogleSignIn
  }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;