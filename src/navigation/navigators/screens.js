import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AUTH_ROUTES, UNAUTH_ROUTES } from "../routes"
import { createStackNavigator } from "@react-navigation/stack";
import { unathOptionsScreen } from "./options";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const tabScreens = AUTH_ROUTES.tabs.map(item => (
    <Tab.Screen 
        name={item["name"]} 
        component={item["component"]} 
    />
))

export const stackScreens = AUTH_ROUTES.stacks.map(item => (
    <Stack.Screen 
        name={item["name"]} 
        component={item["component"]} 
    />
))

export const unahtRouteList = UNAUTH_ROUTES.map(item => (
    <Stack.Screen options={unathOptionsScreen} name={item["name"]} component={item["component"]} />
))