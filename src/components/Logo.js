import {
    View,
    Image
} from 'react-native'
import LogoImage from '../assets/images/logo.png'

export const Logo = ({
    width = 200,
    height = 200
}) => {
    return (
        <View style={{
            width,
            height
        }}>
            <Image style={{
                width: width,
                height: height
            }} source={LogoImage}></Image>
        </View>
    )
}