import { UnauthNavigator } from './navigators/unauth-navigator.js';
import { useMemo } from 'react';
import { useAuth } from '../context/auth.js';
import { AuthNavigator } from './navigators/auth-navigator.js';

export default function Router() {
    const {
        isAdmin,
        logged
    } = useAuth()

    const renderContent = useMemo(() => {
        if (logged) {
            if (isAdmin) {
                return <></>; 
            }

            return <AuthNavigator />; 
        }

        return <UnauthNavigator />;
    }, [isAdmin, logged]); 


    return renderContent
}