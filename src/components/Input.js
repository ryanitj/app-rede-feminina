import {View, TextInput} from 'react-native'
import { colors } from '../constants/colors'
import { spacing } from '../constants/spacing'
import AntDesign from '@expo/vector-icons/AntDesign';

const INPUT_VARIANTS = {
    circled:"circled",
    search:"search"
}

export const Input = ({
    height = 50,
    width = "100%",
    variant = "circled",
    value,
    onChange,
    trailing,
    placeholder = "Digite aqui"
}) => {
    if(variant == INPUT_VARIANTS.circled){
        return (
            <View 
                style={{
                    height,
                    width,
                    paddingHorizontal:spacing.s16,
                    paddingLeft:spacing.s42 + 28,
                    paddingVertical: spacing.s12,
                    borderRadius:999,
                    borderWidth:1,
                    position:"relative"
                }}
            >

                {
                    trailing && (
                        <View style={{
                            position:"absolute",
                            left:-12,
                            bottom:-12,
                            width:70,
                            height:70,
                            borderRadius:999,
                            borderWidth:1,
                            justifyContent:'center',
                            alignItems:'center',
                            backgroundColor:'white'
                        }}>
                            {trailing}
                        </View>
                    )
                }
              

                <TextInput 
                    value={value}
                    placeholder={placeholder}
                    onChangeText={text => onChange(text)}
                    style={{
                        height:"100%",
                        width:"100%",
                    }}
                />
            </View>
        )
    } else if (variant == INPUT_VARIANTS.search) {
        return (
            <View 
                style={{
                    height,
                    width,
                    paddingHorizontal:spacing.s16,
                    paddingVertical: spacing.s12,
                    backgroundColor:colors.gray,
                    position:"relative"
                }}
            >
                <TextInput 
                    placeholder={placeholder}
                    value={value}
                    onChangeText={text => onChange(text)}
                    style={{
                        height:"100%",
                        width:"100%",
                    }}
                />

                <View style={{
                    position:"absolute",
                    right:15,
                    bottom:14
                }}>
                    <AntDesign name="search1" size={24} color={colors.blue} />
                </View>
            </View>
        )
    }
}