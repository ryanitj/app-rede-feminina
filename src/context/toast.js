import React, { createContext, useContext, useState } from 'react';
import Toast, { BaseToast } from 'react-native-toast-message';

const ToastContext = createContext({
    showSuccessToast: (message = "Ocorreu tudo certo!") => { },
    showErrorToast: (message = "Ocorreu um erro inesperado..") => { }
});

const ToastProvider = ({ children }) => {
    const showToast = (message = "Ocorreu tudo certo!") => {
        Toast.show({
            type: 'success',
            text1: 'Sucesso!',
            text2: message,
            visibilityTime: 2000,
        },);

        navigation.goBack();
    }

    const showToastError = (message = "Ocorreu um erro inesperado..") => {
        Toast.show({
            type: 'error',
            text1: 'Erro!',
            text2: message,
            visibilityTime: 2000
        });
    }

    const value = {
        showSuccessToast: showToast,
        showErrorToast: showToastError,
    };

    return (
        <ToastContext.Provider value={value}>{children}</ToastContext.Provider >
    );
};

export const useToast = () => {
    const context = useContext(ToastContext)

    return {
        ...context
    }
}

export { ToastContext, ToastProvider };
