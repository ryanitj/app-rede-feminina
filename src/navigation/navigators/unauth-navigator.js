import { createStackNavigator } from "@react-navigation/stack";
import { ToastProvider } from "../../context/toast";
import { NavigationContainer } from "@react-navigation/native";
import { UNAUTH_ROUTES } from "../routes";

const optionsScreen = {
    headerShown: false
}

const Stack = createStackNavigator();

const routeList = UNAUTH_ROUTES.map(item => (
    <Stack.Screen options={optionsScreen} name={item["name"]} component={item["component"]} />
))

export function UnauthNavigator() {
    return (
        <ToastProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    {routeList}
                </Stack.Navigator>
            </NavigationContainer>
        </ToastProvider>
    );
}
