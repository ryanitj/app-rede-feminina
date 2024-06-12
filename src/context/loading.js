import React, { createContext, useContext, useState } from 'react';
import { Loading } from '../components/Loading';

const LoadingContext = createContext({
    loading: false,
    toggle: () => { }
});

const LoadingProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);

    const toggle = () => {
        setLoading(prev => !prev)
    }

    const value = {
        toggle: toggle,
        loading,
    };

    return (
        <LoadingContext.Provider value={value}>
            {children}
            <Loading visible={loading}></Loading>
        </LoadingContext.Provider >
    );
};

export const useLoading = () => {
    const context = useContext(LoadingContext)

    return {
        ...context
    }
}

export { LoadingContext, LoadingProvider };
