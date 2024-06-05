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
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

export const Register = () => {
    const navigation = useNavigation()

    const [credentials, setCredentials] = useState({
        email:"",
        password:"",
    })

    const goBack = () => {
        navigation.goBack()
    }

    return (
        <Container>
            <Logo height={200} width={200}/>

            <Typograph style={{marginBottom:spacing.s8}}>Bem vindo (a) de volta!</Typograph>
            <Typograph>Faça o cadastro</Typograph>

            <View style={{
                gap:spacing.s24,
                width:"80%",
                marginVertical:spacing.s24
            }}>
                <Input 
                    placeholder='Digite o seu e-mail'
                    trailing={<Ionicons name="person-sharp" size={24} color="black" />}
                    onChange={text => {
                        setCredentials(prev => ({
                            ...prev,
                            email:text
                        }))
                    }}/>
                <Input 
                    placeholder='Digite a sua senha'
                    trailing={<Entypo name="lock" size={24} color="black" />}
                    onChange={text => {
                        setCredentials(prev => ({
                            ...prev,
                            password:text
                        }))
                    }}/>
                <Input 
                    placeholder='Confirme a sua senha'
                    trailing={<Entypo name="lock" size={24} color="black" />}
                    onChange={text => {
                        setCredentials(prev => ({
                            ...prev,
                            password:text
                        }))
                    }}/>
            </View>
           
            <View style={{height:spacing.s42 + 42}}></View>

            <TouchableOpacity onPress={goBack}>
                <Row>
                    <Typograph>Já possui cadastro?</Typograph>
                    <Typograph color={colors.blue}>Faça o login!</Typograph>
                </Row>
            </TouchableOpacity>
        </Container>
    )
}