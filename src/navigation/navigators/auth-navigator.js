import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { ToastProvider } from "../../context/toast";
import { authStackScreenOptions, authTabScreenOptions } from "./options";
import { stackScreens, tabScreens } from "./screens";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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

export function AuthNavigator() {
    return (
        <ToastProvider>
            <StackNavigator/>
        </ToastProvider>
    );
}