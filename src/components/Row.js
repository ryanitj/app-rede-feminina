import { View } from 'react-native'
import {
    spacing
} from '../constants/spacing'

export const Row = ({
    children,
    gap,
    style
}) => {
    gap = gap ? gap : spacing.s8

    return (
        <View style={{
            flexDirection: 'row',
            gap: gap,
            ...style
        }}>
            {children}
        </View>
    )
}