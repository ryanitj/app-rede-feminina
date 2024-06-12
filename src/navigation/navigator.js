import { UnauthNavigator } from './navigators/unauth-navigator.js';
import { useContext, useEffect, useMemo } from 'react';
import { AuthContext, useAuth } from '../context/auth.js';
import { AuthNavigator } from './navigators/auth-navigator.js';

export default function Router() {
    const {
        isAdmin,
        logged
    } = useAuth()

    const renderContent = useMemo(() => {
        if (logged) {
            if (isAdmin) {
                return <></>; // Render content for admins
            }

            return <AuthNavigator />; // Render AuthNavigator for logged-in users
        }

        return <UnauthNavigator />; // Render login screen for unauthenticated users
    }, [isAdmin, logged]); // Re-render if auth context values change


    return (
        <>
            {renderContent}
        </>
    )
}