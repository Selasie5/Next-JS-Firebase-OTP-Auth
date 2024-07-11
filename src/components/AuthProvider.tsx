"use client"
import React, {createContext, useContext,useEffect, useState} from 'react'
import { auth } from '../../firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

type AuthContextType = {
    user: User | null;
};

const AuthContext = createContext<AuthContextType>({user:null})
function AuthProvider({children}:{children:React.ReactNode}) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(()=>
    {
        const unsubscribe = onAuthStateChanged(auth, (user)=>
        {
            //Updates the user state when the user logs in or out
            setUser(user || null);
        });
        return ()=> unsubscribe();
    },[])
  return (
    <AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider

export const useAuth =()=> useContext(AuthContext);