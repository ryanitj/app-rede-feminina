import { View, Text } from 'react-native'
import { fontSize } from '../constants/fontSize'

export const Typograph = ({
    children,
    color = "black",
    size = fontSize.s16,
    weight,
    style,
    center
}) => {
    return (
        <Text style={{
            color,
            fontSize: size,
            fontWeight:weight,
            textAlign: center && "center",
            ...style
        }}>
            {children}
        </Text>
    )
}