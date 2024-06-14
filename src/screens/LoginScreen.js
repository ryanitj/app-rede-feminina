import { View } from 'react-native'
import { Logo } from "../components/Logo"
import { Container } from "../components/Container"
import { Typograph } from "../components/Typograph"
import { Row } from "../components/Row"
import { colors } from "../constants/colors"
import { INPUT_VARIANTS, Input } from "../components/Input"
import { spacing } from '../constants/spacing'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Button } from '../components/Button'
import { fontSize } from '../constants/fontSize'
import { Controller, useForm } from 'react-hook-form'
import { useToast } from '../context/toast'
import { useLoading } from '../context/loading'
import { AuthService, login } from '../services/auth'
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { LOGIN_USE_CASES, loginUseCase } from '../useCases/auth/login'

export const Login = () => {
    const navigation = useNavigation();
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
        },
    })

    const goRegister = () => {
        navigation.navigate("Register")
    }

    const login = async (data) => {
        toggle()
        try {
            const action = loginUseCase(LOGIN_USE_CASES.login, data)
            const response = await action()
       
            if (!response["success"]) {
                showErrorToast()
                return;
            }
            showSuccessToast()
        } catch (error) {
            showErrorToast()
        } finally {
            toggle()
        }
    }

    return (
        <Container justify='space-evenly'>
            <View style={{ marginTop: 24 }}>
                <Logo height={200} width={200} />
            </View>

            <View style={{
                gap: spacing.s24,
                width: "80%",
                alignItems: 'center'
            }}>
                <View style={{
                    alignItems: 'center'
                }}>
                    <Typograph style={{ marginBottom: spacing.s8 }}>Bem vindo (a) de volta!</Typograph>
                    <Typograph size={fontSize.s16 - 2}>Faça o login</Typograph>
                </View>

                <Controller
                    control={control}
                    rules={{
                        required: true
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <Input
                            variant={INPUT_VARIANTS.circled}
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
                            variant={INPUT_VARIANTS.circled}
                            trailing={<Entypo name="lock" size={24} color="black" />}
                            onChangeText={onChange}
                            onBlur={onBlur}
                            value={value}
                            errorText={errors.password ? "Campo obrigatório" : ""}
                            password
                        />
                    )}
                    name="password"
                />

                <View>
                    <Row style={{ marginBottom: spacing.s16 }}>
                        <Typograph size={fontSize.s16 - 2}>Esqueceu sua senha?</Typograph>
                        <Typograph size={fontSize.s16 - 2} color={colors.blue}>Clique aqui!</Typograph>
                    </Row>

                    <Button onPress={handleSubmit(login)} text={"Logar"} width={140} alignSelf={'center'} />
                </View>
            </View>
            <TouchableOpacity
                onPress={goRegister}
            >
                <Row>
                    <Typograph>Não possui cadastro?</Typograph>
                    <Typograph color={colors.blue}>Registre-se!</Typograph>
                </Row>
            </TouchableOpacity>
        </Container>
    )
}