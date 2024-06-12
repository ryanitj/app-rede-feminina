import { TouchableOpacity } from "react-native-gesture-handler"
import { Typograph } from "./Typograph"
import { spacing } from "../constants/spacing"
import { colors } from "../constants/colors"

export const Button = ({
    text,
    onPress,
    width = "100%",
    alignSelf
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                paddingHorizontal: spacing.s24,
                paddingVertical: spacing.s12,
                backgroundColor: colors.primary,
                borderRadius: 999,
                width: width,
                alignSelf: alignSelf
            }}>
            <Typograph style={{ textAlign: "center" }} color={colors.white}>{text}</Typograph>
        </TouchableOpacity>
    )
}