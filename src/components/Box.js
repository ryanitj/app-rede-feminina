import { View } from "react-native"

export const Box = ({children, fullW, style}) => {
    const customStyle = {
        width:fullW ? "100%" : "auto"
    }

    return (
        <View style={{...customStyle, ...style}}>
            {children}
        </View>
    )
}