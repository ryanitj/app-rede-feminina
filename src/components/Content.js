import { View } from "react-native"
import { spacing } from "../constants/spacing"

export const Content = ({children, spacingVariant}) => {
    return (
        <View style={{
            padding:spacingVariant || spacing.s16,
            alignItems:"center",
            flex:1
        }}>
            {children}
        </View>
    )
}