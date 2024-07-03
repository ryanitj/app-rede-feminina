import { View, Text } from 'react-native'
import { spacing } from '../constants/spacing'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { Content } from '../components/Content';
import { useEffect, useState } from 'react';
import { getAllNotifications } from '../services/notification';
import { useUser } from '../context/user';
import { useIsFocused } from '@react-navigation/native';
import { useLoading } from '../context/loading';
import { useToast } from '../context/toast';
import { Empty } from '../components/Empty';

const mock = [
    {
        text:"O seus exames estão prontos!"
    },
    {
        text:"Novos items disponíveis no bazar."
    },
    {
        text:"O seus exames estão prontos!"
    },
]

export const Home = () => {
    const [users, setUsers] = useState([])
    const user = useUser()
    const toast = useToast()
    const loading = useLoading()

    const isFocused = useIsFocused()

    const requestNotifications = async () => {
        loading.toggle()
        try {
            const resp = await getAllNotifications(user.userData["uid"]);
            setUsers(resp.data)
        } catch (error) {
            
        } finally {
            loading.toggle()
        }
    }

    useEffect(() => {
        if(isFocused){
            requestNotifications()
        }
    }, [isFocused])

    return (
        <Content>
           {
            !users || users.length <= 0 && (
                <Empty
                    title={"Nenhum notificação encontrada"}
                    subtitle={"Assim que a rede fizer alguma publicação, será listado aqui."}
                />
            )
           }
            {
                users && users.length > 0 && users.map(item => (
                    <View style={{
                        backgroundColor:"white",
                        padding:spacing.s24,
                        borderRadius:999,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                        width:"100%",
                        gap:spacing.s12,
                        justifyContent:"flex-start",
                        alignItems:"center",
                        flexDirection:"row",
                        marginBottom:spacing.s12
                    }}>
                        <AntDesign name="infocirlce" size={24} color={colors["blue"]}/>
                        <Text>{item["message"]}</Text>
                    </View>
                ))
            }
        </Content>
    )
}