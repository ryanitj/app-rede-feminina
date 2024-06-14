import { UnauthNavigator } from './navigators/unauth-navigator.js';
import { useMemo } from 'react';
import { useAuth } from '../context/auth.js';
import { AuthNavigator } from './navigators/auth-navigator.js';

export default function Router() {
    const {
        logged
    } = useAuth()

    const renderContent = useMemo(() => {
        if (logged) {
            return <AuthNavigator />; 
        }

        return <UnauthNavigator />;
    }, [logged]); 


    return renderContent
}