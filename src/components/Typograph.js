import { View, Text } from 'react-native'
import { fontSize } from '../constants/fontSize'

export const Typograph = ({
    children,
    color = "black",
    size = fontSize.s16,
    style,
}) => {
    return (
        <Text style={{
            color,
            fontSize: size,
            ...style
        }}>
            {children}
        </Text>
    )
}