import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase.init';

const AuthProvider = ({children}) => {



       // signup
       const createUserSignUp = (email , password)=>{
              return createUserWithEmailAndPassword(auth,email,password)
       }

       // sign  in 
       const createUserSignIn = (email , password)=>{
             return signInWithEmailAndPassword(auth , email , password)
       }

       const userInfo = {
             
              createUserSignUp,
              createUserSignIn,
       }
       return (
              <AuthContext value={userInfo}>
                     {children}
              </AuthContext>
       );
};

export default AuthProvider;