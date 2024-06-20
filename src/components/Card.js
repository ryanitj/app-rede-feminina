import { Image, TouchableOpacity, View } from "react-native"
import { Typograph } from "./Typograph"
import LogoImage from '../assets/images/logo.png'
import { fontSize } from "../constants/fontSize"
import { colors } from "../constants/colors"
import { spacing } from "../constants/spacing"

export const Card = ({
    image, 
    title, 
    description, 
    style,
    onPress,
    height
}) => {

    console.log('image')
    console.log(image)
    return (
        <TouchableOpacity 
        onPress={onPress} 
        style={{ backgroundColor:"white", ...style}}>
            <Image source={image ? {uri:image}  : LogoImage} style={{
                width: "100%",
                height: height
            }}/>

            <View style={{
                    backgroundColor:colors["grayLight"], 
                    paddingHorizontal:spacing.s12, 
                    paddingVertical: spacing.s8
                }}>
                <Typograph size={fontSize.s12}>{title}</Typograph>
                <Typograph size={fontSize.s12}>{description}</Typograph>
            </View>
        </TouchableOpacity>
    )
}