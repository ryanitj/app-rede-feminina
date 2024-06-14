import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { colors } from '../constants/colors'
import { spacing } from '../constants/spacing'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useCallback, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';

export const INPUT_VARIANTS = {
    circled: "circled",
    search: "search",
    default: "default",
}

export const PasswordButton = ({
    toggle,
    showPassword
}) => {
    return (
        <TouchableOpacity
            onPress={toggle}
            style={{
                zIndex: 999,
                right: 15,
                bottom: 10,
                position: "absolute"
            }}
        >
            {
                showPassword ? (
                    <Entypo name="eye-with-line" size={24} color="black" />
                ) : (
                    <AntDesign name="eye" size={24} color="black" />
                )
            }
        </TouchableOpacity>
    )
}

export const Input = ({
    height = 50,
    width = "100%",
    variant = "default",
    value,
    onChangeText,
    onBlur,
    trailing,
    placeholder = "Digite aqui",
    password,
    keyboardType,
    errorText
}) => {
    const [showPassword, setShowPassword] = useState(!password);

    const togglePassword = useCallback(() => {
        setShowPassword(prev => !prev)
    }, [showPassword])

    if(variant == INPUT_VARIANTS.default) {
        return (
            <View
                style={{
                    height,
                    width,
                    paddingHorizontal: spacing.s16,
                    paddingVertical: spacing.s12,
                    backgroundColor: "transparent",
                    borderWidth:1,
                    borderColor:colors["gray"],
                    position: "relative",
                    marginBottom:errorText ? 16 : 0
                }}
            >
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    keyboardType={keyboardType}
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                />


                {
                    !!errorText && (
                        <Text
                            style={{
                                position: "absolute",
                                bottom: -20,
                                right: 10,
                                color: 'red'
                            }}
                        >{errorText}</Text>
                    )
                }
            </View>
        )
    } else if (variant == INPUT_VARIANTS.circled) {
        return (
            <View
                style={{
                    height,
                    width,
                    paddingHorizontal: spacing.s16,
                    paddingLeft: spacing.s42 + 28,
                    paddingVertical: spacing.s12,
                    borderRadius: 999,
                    borderWidth: 1,
                    position: "relative"
                }}
            >
                {
                    trailing && (
                        <View style={{
                            position: "absolute",
                            left: -12,
                            bottom: -12,
                            width: 70,
                            height: 70,
                            borderRadius: 999,
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'white'
                        }}>
                            {trailing}
                        </View>
                    )
                }

                <TextInput
                    value={value}
                    keyboardType={keyboardType}
                    placeholder={placeholder}
                    secureTextEntry={!showPassword}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                />

                {
                    !!errorText && (
                        <Text
                            style={{
                                position: "absolute",
                                bottom: -20,
                                right: 10,
                                color: 'red'
                            }}
                        >{errorText}</Text>
                    )
                }

                {password && <PasswordButton showPassword={showPassword} toggle={togglePassword} />}
            </View>
        )
    } else if (variant == INPUT_VARIANTS.search) {
        return (
            <View
                style={{
                    height,
                    width,
                    paddingHorizontal: spacing.s16,
                    paddingVertical: spacing.s12,
                    backgroundColor: colors.gray,
                    position: "relative"
                }}
            >
                <TextInput
                    placeholder={placeholder}
                    value={value}
                    onChangeText={onChangeText}
                    onBlur={onBlur}
                    keyboardType={keyboardType}
                    style={{
                        height: "100%",
                        width: "100%",
                    }}
                />

                <View style={{
                    position: "absolute",
                    right: 15,
                    bottom: 14
                }}>
                    <AntDesign name="search1" size={24} color={colors.blue} />
                </View>
            </View>
        )
    }
}