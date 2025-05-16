import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase.init';

const AuthProvider = ({children}) => {



       // signup
       const createUserSignUp = (email , password)=>{
              return createUserWithEmailAndPassword(auth,email,password)
       }

       const userInfo = {
             
              createUserSignUp,
       }
       return (
              <AuthContext value={userInfo}>
                     {children}
              </AuthContext>
       );
};

export default AuthProvider;