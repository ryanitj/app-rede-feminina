import CheckBox from 'expo-checkbox';
import { ScrollView, Text, View } from "react-native"
import { Content } from "../components/Content"
import { spacing } from "../constants/spacing"
import { Ionicons } from "@expo/vector-icons"
import { Controller, useForm } from "react-hook-form"
import { INPUT_VARIANTS, Input } from "../components/Input"
import { Button } from "../components/Button"
import { useEffect, useState } from "react"
import { getAllUsers } from "../services/users"
import { useToast } from '../context/toast';
import { useLoading } from '../context/loading';
import { Typograph } from '../components/Typograph';
import { fontSize } from '../constants/fontSize';
import { fontWeight } from '../constants/fontWeight';
import { createNotifications } from '../services/notification';

export const Notification = () => {
    const [users, setUsers] = useState([])
    const toast = useToast()
    const loading = useLoading()

    const selected = users.filter(item => item["selected"])

    const {
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: {
            message: "",
        },
    })

    const requestUsers = async () => {
        loading.toggle()
        try {
            const resp = await getAllUsers();
            setUsers(resp.data.map(item => {
                item["selected"] = false
                return item
            }))
        } catch (error) {
            
        } finally {
            loading.toggle()
        }
    }

    const resetForm = () => {
        reset()
        setUsers(prev => prev.map(item => {
            item["selected"] = false;
            return item
        }))
    }

    const submit = async (data) => {
        loading.toggle()
        try {
            const payloadArray = users.filter(item => item["selected"]).map(item => ({id:item["id"], message:data["message"], uid:item["uid"]}))
            await createNotifications(payloadArray)

            resetForm()
            toast.showSuccessToast()
        } catch (error) {
            toast.showErrorToast()
        } finally {
            loading.toggle()
        }
    }

    useEffect(() => {
        requestUsers()
    }, [])

    const handleCheck = (index, checked) => {
        const auxUsers = [...users]
        auxUsers[index]["selected"] = checked 
        setUsers([...auxUsers])
    }

    return (
        <Content>
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        variant={INPUT_VARIANTS.default}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        placeholder="Digite a mensagem"
                        value={value}
                        errorText={errors.message ? "Campo obrigatório" : ""}
                        trailing={<Ionicons name="person-sharp" size={24} color="black" />}
                    />
                )}
                name="message"
            />


            <View style={{flex:1, width:"100%"}}>
                <ScrollView style={{marginTop:spacing.s16}}>
                    <Typograph style={{marginBottom:spacing.s12 - 6}} size={fontSize.s12} weight={fontWeight[700]}>Selecione os usuários: </Typograph>
                    {
                        users && users.map((item, index) => (
                            <View style={{
                                backgroundColor:"white",
                                padding:spacing.s24,
                                borderRadius:4,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                                width:"100%",
                                justifyContent:"space-between",
                                alignItems:"center",
                                flexDirection:"row",
                                marginBottom:spacing.s12
                            }}>
                                <Text>{item["email"]}</Text>
                                <CheckBox
                                    value={item["selected"]}
                                    onValueChange={(checked) => handleCheck(index, checked)}
                                />
                            </View>
                        ))
                    }
                    
                </ScrollView>
            </View>


            <Button disabled={selected.length <= 0} text={"Enviar"} onPress={handleSubmit(submit)}></Button>
        </Content>
    )
}