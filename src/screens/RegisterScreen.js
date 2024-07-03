import { View } from 'react-native'
import { Logo } from "../components/Logo"
import { Container } from "../components/Container"
import { Typograph } from "../components/Typograph"
import { Row } from "../components/Row"
import { colors } from "../constants/colors"
import { INPUT_VARIANTS, Input } from "../components/Input"
import { spacing } from '../constants/spacing'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';
import { Button } from '../components/Button'
import { fontSize } from '../constants/fontSize'
import { AuthService } from '../services/auth'
import { useLoading } from '../context/loading'
import { useToast } from '../context/toast'
import { Controller, useForm } from 'react-hook-form'
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { createUser } from '../services/users'

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
        try {
            const response = await AuthService.register(data["email"], data["password"]);

            delete data["password"]
            delete data["confirmPassword"]

            const payload = {
                ...data, 
                uid: response.user.uid, 
                admin:0
            }

            await createUser(payload)

            if (!response.user.uid) {
                showErrorToast()
                return;
            }
            showSuccessToast()
            navigation.goBack()
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
                        variant={INPUT_VARIANTS.circled}
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