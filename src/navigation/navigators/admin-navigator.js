import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { ToastProvider } from "../../context/toast";
import { authStackScreenOptions, authTabScreenOptions } from "./options";
import { ADMIN_AUTH_ROUTES } from "../routes";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const tabScreens = ADMIN_AUTH_ROUTES.tabs.map(item => (
    <Tab.Screen 
        name={item["name"]} 
        component={item["component"]} 
    />
))

export const stackScreens = ADMIN_AUTH_ROUTES.stacks.map(item => (
    <Stack.Screen 
        name={item["name"]} 
        component={item["component"]} 
    />
))

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={authTabScreenOptions}>
            {tabScreens}
        </Tab.Navigator>
    )
}

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={authStackScreenOptions}>
            <Stack.Screen
                name="Root"
                component={TabNavigator}
                options={{headerShown:false}}
            />
            {stackScreens}
        </Stack.Navigator>
    )
}

export function AdminAuthNavigator() {
    return (
        <ToastProvider>
            <StackNavigator/>
        </ToastProvider>
    );
}