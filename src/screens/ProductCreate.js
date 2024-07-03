import { Image, TouchableOpacity, View } from "react-native"
import { Button } from "../components/Button"
import { Content } from "../components/Content"
import { spacing } from "../constants/spacing"
import { colors } from "../constants/colors"
import { createIconSetFromFontello, Fontisto } from '@expo/vector-icons';
import { Typograph } from "../components/Typograph"
import { INPUT_VARIANTS, Input } from "../components/Input"
import { Box } from "../components/Box"
import { useState } from "react"
import { Controller, useForm } from "react-hook-form"
import { ImagePicker } from "../components/ImagePicker"
import { insertProduct } from "../services/product"
import { useToast } from "../context/toast"
import { useLoading } from "../context/loading"

export const ProductCreate = () => {
    const [image, setImage] = useState(null);
    const toast = useToast()
    const loading = useLoading()

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            price: "",
        },
    })

    const submit = async (data) => {
        loading.toggle()
        try {
            const payload = {
                nome: data["name"],
                valor: data["price"],
                img: image
            }
            const response = await insertProduct(payload);

            if (!response["success"]) {
                toast.showErrorToast()
                return;
            }

            toast.showSuccessToast()
        } catch (error) {

        } finally {
            loading.toggle()
        }
    }

    return (
        <Content>
            <ImagePicker
                onPickImage={(file) => {
                    setImage(file)
                }}
                styles={{
                    width: 200,
                    height: 200,
                    borderWidth: 2,
                    borderColor: colors["primary"],
                    backgroundColor: colors["gray"],
                    marginBottom: spacing.s12,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative"
                }}>
                {
                    image ? (
                        <>
                            <Image style={{ position: "absolute", width: 196, height: 196 }} source={{ uri: image }} />
                        </>
                    ) : (
                        <>
                            <Fontisto name="picture" size={36} color={colors["primary"]} style={{ marginBottom: spacing.s12 }} />
                            <Typograph color={colors["primary"]} style={{ textAlign: "center" }}>Adicione a foto aqui</Typograph>
                        </>
                    )
                }
            </ImagePicker>

            <Box
                fullW
                style={{
                    gap: spacing.s12,
                    marginBottom: spacing.s24
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
                            variant={INPUT_VARIANTS.default} />
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
                            variant={INPUT_VARIANTS.default} />
                    )}
                    name="price"
                />
            </Box>

            <View style={{ flex: 1 }}></View>
            <Button onPress={handleSubmit(submit)} text={"Adicionar"} />
        </Content>
    )
}