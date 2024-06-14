import { Entypo } from "@expo/vector-icons"
import { useAuth } from "../context/auth"
import { colors } from "../constants/colors"
import { TouchableOpacity } from "react-native"

export const LogoutButton = () => {
    const { signOut } = useAuth()

    const request = async () => {
        await signOut()
    }

    return (
        <TouchableOpacity
            onPress={request}
            style={{ backgroundColor: colors["primaryDarker"], width: 36, height: 36, borderRadius: 999, alignItems: 'center', justifyContent: 'center', marginRight: 12 }}>
            <Entypo name="log-out" size={14} color="white" />
        </TouchableOpacity>
    )
}