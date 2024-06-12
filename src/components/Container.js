import { View } from 'react-native'
import { colors } from '../constants/colors'

export const Container = ({
    children,
    justify = "center",
    align = "center",
    backgroundColor = colors.white
}) => {
    return (
        <View style={{
            flex: 1,
            justifyContent: justify,
            alignItems: align,
            backgroundColor: backgroundColor
        }}>
            {children}
        </View>
    )
}