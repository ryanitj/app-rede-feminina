import { createStackNavigator } from "@react-navigation/stack";
import { ToastProvider } from "../../context/toast";
import { unahtRouteList } from "./screens";

const Stack = createStackNavigator();

export function UnauthNavigator() {
    return (
        <ToastProvider>
            <Stack.Navigator>
                {unahtRouteList}
            </Stack.Navigator>
        </ToastProvider>
    );
}
