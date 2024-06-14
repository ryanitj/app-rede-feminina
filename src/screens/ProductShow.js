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

export const ProductShow = ({route}) => {
    const { data } = route.params

    const navigation = useNavigation()
    const loadingContext = useLoading()
    const toastContext = useToast()

    const [image, setImage] = useState(data["image"]);

    const imageSource = useMemo(() => {
        return image["uri"] ? {uri:image} : image;
    }, [image]) 

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: data["title"],
            description: data["description"],
            price: formatCurrency(data["price"]),
        },
    })

    const actionProduct = async (useCase) => {
        loadingContext.toggle()
        try {
            const action = pickUseCase(useCase, {"teste":"teste"})
            const response = await action()
            if(!response["success"]){
                toastContext.showErrorToast()
                return; 
            }
            toastContext.showSuccessToast(undefined, ()=>{
                navigation.goBack();
            })
        } catch (error) {
            console.log(error)
            toastContext.showErrorToast()
        } finally {
            loadingContext.toggle()
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
                            errorText={errors.description ? "Campo obrigatório" : ""}
                            placeholder="Descrição do Produto" 
                            variant={INPUT_VARIANTS.default}/>
                        )}
                        name="description"
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
                    onPress={() => actionProduct(PRODUCT_USE_CASES.exclude)}
                />
                <Button 
                    width="33%" 
                    text={"Inativar"} 
                    backgroundColor={colors["primary"]}
                    onPress={() => actionProduct(PRODUCT_USE_CASES.inativate)}
                />
                <Button 
                    width="33%" 
                    text={"Salvar"} 
                    backgroundColor={colors["blue"]}
                    onPress={() => handleSubmit(actionProduct(PRODUCT_USE_CASES.save))}
                />
            </Row>
        </Content>
    )
}