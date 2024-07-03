import { View } from "react-native"

export const Box = ({children, fullW, style, center}) => {
    const customStyle = {
        width:fullW ? "100%" : "auto",
        justifyContent: center && "center",
        alignItems: center ? "center" : "stretch",
    }

    return (
        <View style={{...customStyle, ...style}}>
            {children}
        </View>
    )
}