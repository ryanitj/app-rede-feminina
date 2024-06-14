import { Typograph } from "./Typograph"
import { spacing } from "../constants/spacing"
import { colors } from "../constants/colors"
import { TouchableOpacity } from "react-native"

export const Button = ({
    text,
    onPress,
    width = "100%",
    alignSelf,
    backgroundColor
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                paddingHorizontal: spacing.s24,
                paddingVertical: spacing.s12,
                backgroundColor: backgroundColor || colors.primary,
                borderRadius: 999,
                width: width,
                alignSelf: alignSelf
            }}>
            <Typograph style={{ textAlign: "center" }} color={colors.white}>{text}</Typograph>
        </TouchableOpacity>
    )
}