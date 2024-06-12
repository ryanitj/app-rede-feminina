import React, { createContext, useState } from 'react';

// Context for user data and related functions
const UserDataContext = createContext({
    userData: null,
    setUserData: (data) => { },
    clearUserData: () => { },
});

const UserDataProvider = ({ children }) => {
    const [userData, setUserData] = useState(null);

    const saveUserData = async (data) => {
        try {
            setUserData(data)
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };

    const clearUserData = async () => {
        try {
            setUserData(null);
        } catch (error) {
            console.error('Error clearing user data:', error);
        }
    };

    const value = {
        userData,
        setUserData: saveUserData, // Use saveUserData for secure storage
        clearUserData,
    };

    return (
        <UserDataContext.Provider value={value}>{children}</UserDataContext.Provider >
    );
};

export { UserDataContext, UserDataProvider };
