import { Typograph } from "./Typograph"
import { spacing } from "../constants/spacing"
import { colors } from "../constants/colors"
import { TouchableOpacity } from "react-native"

export const Button = ({
    text,
    onPress,
    width = "100%",
    alignSelf,
    backgroundColor,
    disabled
}) => {

    const onTap = () => {
        if(disabled){
            return;
        }
        return onPress()
    }

    return (
        <TouchableOpacity
            onPress={onTap}
            style={{
                paddingHorizontal: spacing.s24,
                paddingVertical: spacing.s12,
                backgroundColor: disabled ? colors["gray"] : backgroundColor || colors.primary,
                borderRadius: 999,
                width: width,
                alignSelf: alignSelf
            }}>
            <Typograph style={{ textAlign: "center" }} color={colors.white}>{text}</Typograph>
        </TouchableOpacity>
    )
}