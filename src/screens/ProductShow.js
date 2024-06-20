import { Image, View } from "react-native"
import { Button } from "../components/Button"
import { Content } from "../components/Content"
import { spacing } from "../constants/spacing"
import { colors } from "../constants/colors"
import { Fontisto } from '@expo/vector-icons';
import { Typograph } from "../components/Typograph"
import { INPUT_VARIANTS, Input } from "../components/Input"
import { Box } from "../components/Box"
import { useMemo, useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { ImagePicker } from "../components/ImagePicker"
import { Row } from "../components/Row"
import { formatCurrency } from "../util/currencyFormat"
import { PRODUCT_USE_CASES, pickUseCase } from "../useCases/products/show"
import { useLoading } from "../context/loading"
import { useToast } from "../context/toast"
import { useNavigation } from "@react-navigation/native"
import { updateDoc } from "firebase/firestore"
import { updateProduct } from "../services/product"

export const ProductShow = ({route}) => {
    const { data } = route.params
    console.log('data')
    console.log(data)
    const navigation = useNavigation()
    const loadingContext = useLoading()
    const toastContext = useToast()

    const [image, setImage] = useState(data["image"] || {});

    const imageSource = useMemo(() => {
        console.log('image ---------------')
        console.log(image)
        return {uri:image};
    }, [image]) 

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: data["title"],
            price: data["price"] || "",
            id: data["id"] || "",
        },
    })

    const submit = async (newData) => {
        try {
            const payload = {
                id:data["id"],
                nome:newData["name"],
                valor:newData["price"],
                img:image
            }

            const response = await updateProduct({...payload})
            if(!response["success"]){
                toastContext.showErrorToast()
                return;
            }

            toastContext.showSuccessToast()
        } catch (error) {
            console.log(error)
            toastContext.showErrorToast()
        }
    } 


    return (
        <Content>
            <ImagePicker
            onPickImage={(file) => setImage(file)}
            styles={{
                width:200,
                height:200,
                borderWidth:2,
                borderColor:colors["primary"],
                backgroundColor:colors["gray"],
                marginBottom:spacing.s12 ,
                justifyContent:"center",
                alignItems:"center",
                position:"relative"
            }}>
                {
                    image ? (<Image style={{position:"absolute", width:196, height:196}} source={imageSource}/>) : (
                        <>
                            <Fontisto name="picture" size={36} color={colors["primary"]} style={{marginBottom:spacing.s12}} />
                            <Typograph color={colors["primary"]} style={{textAlign:"center"}}>Adicione a foto aqui</Typograph>
                        </>
                    )
                }
            </ImagePicker>
            <Box 
            fullW 
            style={{
                gap:spacing.s12,
                marginBottom:spacing.s24
            }}>
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
                            errorText={errors.name ? "Campo obrigatório" : ""}
                            placeholder="Nome do Produto" 
                            variant={INPUT_VARIANTS.default}/>
                        )}
                        name="name"
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
                            errorText={errors.price ? "Campo obrigatório" : ""}
                            placeholder="Preço" 
                            variant={INPUT_VARIANTS.default}/>
                        )}
                        name="price"
                    />
            </Box>

            <View style={{flex:1}}></View>
            <Row>
                <Button 
                    width="33%" 
                    text={"Excluir"} 
                    backgroundColor={colors["red"]}
                    onPress={() => updateProduct()}
                />
                <Button 
                    width="33%" 
                    text={"Inativar"} 
                    backgroundColor={colors["primary"]}
                    onPress={() => updateProduct()}
                />
                <Button 
                    width="33%" 
                    text={"Salvar"} 
                    backgroundColor={colors["blue"]}
                    onPress={handleSubmit(submit)}
                />
            </Row>
        </Content>
    )
}