import React, { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../config/firebase';
import { getUser } from '../services/users';
import { UserDataContext } from './user';

const AuthContext = createContext({
    logged: false,
    isAdmin: false,
    signOut: async () => { }
});

const AuthProvider = ({ children }) => {
    const userContext = useContext(UserDataContext)
    const [isAdmin, setIsAdmin] = useState(false);
    const [logged, setLogged] = useState(false);

    const signOut = async () => {
        await auth.signOut()
        setLogged(false)
        setIsAdmin(false)
    }

    async function onAuthStateChanged(user) {
        if (!user) {
            setLogged(false)
            return;
        }
        let userData = await getUser({ uid: user.uid })
        userContext.setUserData(userData.data)
     
        setIsAdmin(userData.data["admin"] == 1)
        setLogged(true)
    }

    useEffect(() => {
        const subscriber = auth.onAuthStateChanged(onAuthStateChanged)
        return subscriber;
    }, [logged]);

    const value = {
        logged,
        isAdmin,
        signOut
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider >
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext)

    return {
        ...context
    }
}

export { AuthContext, AuthProvider };
