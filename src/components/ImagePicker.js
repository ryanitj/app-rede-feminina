import { TouchableOpacity } from "react-native"
import { launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';

export const ImagePicker = ({children, onPickImage, styles}) => {
    const pickImage = async () => {
        let result = await launchImageLibraryAsync({
          mediaTypes: MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        })
        
        console.log('result')
        console.log(result.assets)
        console.log(result)
        onPickImage(result.assets[0].uri)
    };

    return (
        <TouchableOpacity
            onPress={pickImage}
            style={{...styles}}
        >
            {children}
        </TouchableOpacity>
    )
}