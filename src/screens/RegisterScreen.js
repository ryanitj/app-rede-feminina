import { useState } from 'react'
import { View } from 'react-native'
import { Logo } from "../components/Logo"
import { Container } from "../components/Container"
import { Typograph } from "../components/Typograph"
import { Row } from "../components/Row"
import { colors } from "../constants/colors"
import { Input } from "../components/Input"
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { spacing } from '../constants/spacing'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/Button'
import { fontSize } from '../constants/fontSize'
import { register } from '../services/auth'
import { useLoading } from '../context/loading'
import { useToast } from '../context/toast'
import { Controller, useForm } from 'react-hook-form'

export const Register = () => {
    const navigation = useNavigation()
    const { showErrorToast, showSuccessToast } = useToast();
    const { toggle } = useLoading();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
    })

    const handleRegister = async (data) => {
        toggle()
        const response = await register(data["email"], data["password"]);
        toggle()
        if (!response["success"]) {
            showErrorToast()
            return;
        }
        showSuccessToast()
        navigation.goBack()
    }

    return (
        <Container justify='space-evenly'>
            <View style={{ marginTop: 24 }}>
                <Logo height={200} width={200} />
            </View>


            <View style={{
                gap: spacing.s24,
                width: "80%",
            }}>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Typograph style={{ marginBottom: spacing.s8 }}>Bem vindo (a) de volta!</Typograph>
                    <Typograph size={fontSize.s16 - 2}>Faça o cadastro</Typograph>
                </View>
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            errorText={errors.email ? "Campo obrigatório" : ""}
                            trailing={<Ionicons name="person-sharp" size={24} color="black" />}
                        />
                    )}
                    name="email"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            password
                            errorText={errors.password ? "Campo obrigatório" : ""}
                            trailing={<Entypo name="lock" size={24} color="black" />}
                        />
                    )}
                    name="password"
                />
                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            placeholder='Confirme sua senha'
                            password
                            errorText={errors.confirmPassword ? "Campo obrigatório" : ""}
                            trailing={<Entypo name="lock" size={24} color="black" />}
                        />
                    )}
                    name="confirmPassword"
                />


                <Button onPress={handleSubmit(handleRegister)} text={"Cadastrar"} width={140} alignSelf={'center'} />
            </View>

            <TouchableOpacity
                onPress={() => navigation.goBack()}>
                <Row>
                    <Typograph>Já possui cadastro?</Typograph>
                    <Typograph color={colors.blue}>Faça o login!</Typograph>
                </Row>
            </TouchableOpacity>
        </Container>
    )
}