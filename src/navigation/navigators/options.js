import { View } from "react-native"
import { LogoutButton } from "../../components/LogoutButton"
import { colors } from "../../constants/colors"
import { AntDesign, Entypo } from "@expo/vector-icons"
import { Logo } from "../../components/Logo"
import { CardStyleInterpolators } from "@react-navigation/stack"

export const authTabScreenOptions = ({ route }) => ({
    tabBarIcon: ({ color }) => {
        if (route["name"] == "Início") {
            return (<Entypo name="home" size={24} color={color} />)
        } else if (route["name"] == "Bazar") {
            return <Entypo name="shopping-cart" size={24} color={color} />
        } else if (route["name"] == "Sobre") {
            return <AntDesign name="infocirlce" size={24} color={color} />
        } else if (route["name"] == "Notificações") {
            return <Entypo name="message" size={24} color={color} />
        }
    },
    tabBarActiveTintColor: colors["blue"], // Change active tab color
    tabBarInactiveTintColor: 'gray',
    headerStyle: { backgroundColor: colors["primary"] },
    headerRight: (props) => <LogoutButton />,
    headerLeft: (props) => <View style={{ marginLeft: 12 }}><Logo height={50} width={50} /></View>,
    headerTitleStyle: {color:colors["primary"]}
})


export const authStackScreenOptions = ({ route }) => ({
    headerStyle: { backgroundColor: colors["primary"] },
    headerRight: (props) => <LogoutButton />,
    headerLeft: (props) => <View style={{ marginLeft: 12 }}><Logo height={50} width={50} /></View>,
    headerTitleStyle: {color:colors["primary"]}
})

export const unathOptionsScreen = {
    headerShown: false,
    cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}