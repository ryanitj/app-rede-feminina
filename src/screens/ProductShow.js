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
import { useToast } from "../context/toast"
import { updateProduct } from "../services/product"
import { useLoading } from "../context/loading"

export const ProductShow = ({ route }) => {
    const { data } = route.params
    const loading = useLoading()
    const toastContext = useToast()

    const [image, setImage] = useState(data["image"] || {});

    const imageSource = useMemo(() => {
        return { uri: image };
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
        loading.toggle()
        try {
            const payload = {
                id: data["id"],
                nome: newData["name"],
                valor: newData["price"],
                img: image
            }

            const response = await updateProduct({ ...payload })
            if (!response["success"]) {
                toastContext.showErrorToast()
                return;
            }

            toastContext.showSuccessToast()
        } catch (error) {
            console.log(error)
            toastContext.showErrorToast()
        } finally {
            loading.toggle()
        }
    }

    const exclude = async () => {
        loading.toggle()
        try {
            let payload = {
                id: data["id"],
                status: 3
            }

            const response = await updateProduct({ ...payload })
            if (!response["success"]) {
                toastContext.showErrorToast()
                return;
            }

            toastContext.showSuccessToast()
        } catch (error) {
            toastContext.showErrorToast()
        } finally {
            loading.toggle()
        }
    }

    const inactive = async () => {
        loading.toggle()
        try {
            let payload = {
                id: data["id"],
                status: data["status"] == 2 ? 1 : 2
            }

            const response = await updateProduct({ ...payload })
            if (!response["success"]) {
                toastContext.showErrorToast()
                return;
            }

            toastContext.showSuccessToast()
        } catch (error) {
            toastContext.showErrorToast()
        } finally {
            loading.toggle()
        }
    }


    return (
        <Content>
            <ImagePicker
                onPickImage={(file) => setImage(file)}
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
                    image ? (<Image style={{ position: "absolute", width: 196, height: 196 }} source={imageSource} />) : (
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
            <Row>
                <Button
                    width="33%"
                    text={"Excluir"}
                    backgroundColor={colors["red"]}
                    onPress={exclude}
                />
                <Button
                    width="33%"
                    text={data["status"] == 2 ? "Ativar" : "Inativar"}
                    backgroundColor={colors["primary"]}
                    onPress={inactive}
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