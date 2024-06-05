import {useState} from 'react'
import {View} from 'react-native'
import { Logo } from "../components/Logo"
import { Container } from "../components/Container"
import { Typograph } from "../components/Typograph"
import { Row } from "../components/Row"
import { colors } from "../constants/colors"
import { Input } from "../components/Input"
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import { spacing } from '../constants/spacing'
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler'

export const Login = () => {
    const navigation = useNavigation();
    const [credentials, setCredentials] = useState({
        email:"",
        password:"",
    })

    const goRegister = () => {
        navigation.navigate("Register")
    }

    return (
        <Container>
            <Logo height={200} width={200}/>

            <Typograph style={{marginBottom:spacing.s8}}>Bem vindo (a) de volta!</Typograph>
            <Typograph>Faça o login</Typograph>

            <View style={{
                gap:spacing.s24,
                width:"80%",
                marginVertical:spacing.s24
            }}>
                <Input 
                    trailing={<Ionicons name="person-sharp" size={24} color="black" />}
                    onChange={text => {
                        setCredentials(prev => ({
                            ...prev,
                            email:text
                        }))
                    }}/>
                <Input 
                    trailing={<Entypo name="lock" size={24} color="black" />}
                    onChange={text => {
                        setCredentials(prev => ({
                            ...prev,
                            password:text
                        }))
                    }}/>
            </View>
           
            <Row>
                <Typograph>Esqueceu sua senha?</Typograph>
                <Typograph color={colors.blue}>Clique aqui!</Typograph>
            </Row>
            <View style={{height:spacing.s42 + 42}}></View>
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