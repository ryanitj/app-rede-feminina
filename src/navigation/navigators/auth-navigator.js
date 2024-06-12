import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AUTH_ROUTES } from "../routes";
import { colors } from "../../constants/colors";
import { TouchableOpacity, View } from "react-native";
import { Logo } from "../../components/Logo";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';
import { LogoutButton } from "../../components/LogoutButton";

const options = {
    headerStyle: { backgroundColor: colors["primary"] }
}

const Tab = createBottomTabNavigator();

const routeList = AUTH_ROUTES.map(item => (
    <Tab.Screen options={({ route }) => ({

    })} name={item["name"]} component={item["component"]} />
))

export function AuthNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator

                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        if (route["name"] == "Home") {
                            return (
                                <Entypo name="home" size={24} color={color} />
                            )
                        } else if (route["name"] == "Settings") {
                            return <Entypo name="shopping-cart" size={24} color={color} />
                        } else if (route["name"] == "About") {
                            return <AntDesign name="infocirlce" size={24} color={color} />
                        }
                    },
                    tabBarActiveTintColor: colors["blue"], // Change active tab color
                    tabBarInactiveTintColor: 'gray',
                    headerStyle: { backgroundColor: colors["primary"] },
                    headerRight: (props) => <LogoutButton />,
                    headerLeft: (props) => <View style={{ marginLeft: 12 }}><Logo height={50} width={50} /></View>

                })}>
                {routeList}
            </Tab.Navigator>
        </NavigationContainer>
    );
}