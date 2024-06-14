import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { AUTH_ROUTES } from "../routes";
import { colors } from "../../constants/colors";
import { View } from "react-native";
import { Logo } from "../../components/Logo";
import { LogoutButton } from "../../components/LogoutButton";
import { createStackNavigator } from "@react-navigation/stack";
import Entypo from '@expo/vector-icons/Entypo';
import AntDesign from '@expo/vector-icons/AntDesign';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const tabScreenOptions = ({ route }) => ({
    tabBarIcon: ({ color }) => {
        if (route["name"] == "Início") {
            return (<Entypo name="home" size={24} color={color} />)
        } else if (route["name"] == "Bazar") {
            return <Entypo name="shopping-cart" size={24} color={color} />
        } else if (route["name"] == "Sobre") {
            return <AntDesign name="infocirlce" size={24} color={color} />
        }
    },
    tabBarActiveTintColor: colors["blue"], // Change active tab color
    tabBarInactiveTintColor: 'gray',
    headerStyle: { backgroundColor: colors["primary"] },
    headerRight: (props) => <LogoutButton />,
    headerLeft: (props) => <View style={{ marginLeft: 12 }}><Logo height={50} width={50} /></View>,
    headerTitleStyle: {color:colors["primary"]}
})


const stackScreenOptions = ({ route }) => ({
    headerStyle: { backgroundColor: colors["primary"] },
    headerRight: (props) => <LogoutButton />,
    headerLeft: (props) => <View style={{ marginLeft: 12 }}><Logo height={50} width={50} /></View>,
    headerTitleStyle: {color:colors["primary"]}
})

const tabScreens = AUTH_ROUTES.tabs.map(item => (
    <Tab.Screen 
        name={item["name"]} 
        component={item["component"]} 
    />
))

const stackScreens = AUTH_ROUTES.stacks.map(item => (
    <Stack.Screen 
        name={item["name"]} 
        component={item["component"]} 
    />
))

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={tabScreenOptions}>
            {tabScreens}
        </Tab.Navigator>
    )
}

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={stackScreenOptions}>
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
        <NavigationContainer>
            <StackNavigator/>
        </NavigationContainer>
    );
}