import { UnauthNavigator } from './navigators/unauth-navigator.js';
import { useMemo } from 'react';
import { useAuth } from '../context/auth.js';
import { AuthNavigator } from './navigators/auth-navigator.js';
import { AdminAuthNavigator } from './navigators/admin-navigator.js';

export default function Router() {
    const {
        logged,
        isAdmin
    } = useAuth()
    console.log(isAdmin)
    const renderContent = useMemo(() => {
        if (logged) {
            if(isAdmin){
                return <AdminAuthNavigator />; 
            }
            return <AuthNavigator />; 
        }



        return <UnauthNavigator />;
    }, [logged]); 


    return renderContent
}