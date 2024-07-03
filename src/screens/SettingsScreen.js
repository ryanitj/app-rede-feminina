import { Content } from '../components/Content'
import { Input } from '../components/Input'
import { Box } from '../components/Box'
import { Card } from '../components/Card'
import { ScrollView } from 'react-native'
import { spacing } from '../constants/spacing'
import { Button } from '../components/Button'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { useEffect, useState } from 'react'
import { Typograph } from '../components/Typograph'
import { getProducts } from '../services/product'
import { useUser } from '../context/user'
import { Empty } from '../components/Empty'

export const Settings = () => {
    const isFocused = useIsFocused()
    const navigation = useNavigation()
    const user = useUser()
    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const list = products.filter(item => item && item["nome"].includes(search)).length > 0 ? products.filter(item => item["nome"].includes(search)) : search ? [] : products
    console.log('list -------------')

    const navigateAddProduct = () => {
        navigation.navigate("ProductCreate")
    }

    const navigateShowProduct = (item) => {
        if (!user.userData["admin"]) {
            return;
        }

        navigation.navigate("ProductShow", {
            data: {
                price: item["valor"],
                title: item["nome"],
                image: item["img"] || {},
                id: item["id"],
                status:item["status"]
            }
        })
    }

    const requestProducts = async () => {
        try {
            const response = await getProducts();
            setProducts(response.data)
        } catch (error) {

        }
    }

    useEffect(() => {
        if (isFocused) {
            requestProducts()
        }
    }, [isFocused])

    const handleText = (text) => {
        setSearch(text)
    }

    return (
        <ScrollView>
            <Content spacingVariant={spacing.s12 - 4}>
                <Input variant='search' onChangeText={text => handleText(text)}></Input>

                <Box fullW style={{ marginTop: spacing.s12 - 2 }}>
                    {
                        !!user.userData["admin"] && (
                            <Button onPress={navigateAddProduct} text={"Adicionar produto"} />
                        )
                    }
                </Box>

                <Box
                    fullW
                    style={{
                        flexWrap: "wrap",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    {
                        list.length <= 0 && (
                            <Box fullW center style={{ marginTop: spacing.s24 }}>
                                <Empty
                                    title={"Nenhum produto encontrado"}
                                />
                            </Box>
                        )
                    }
                    {
                        list && list.length >= 0 && list.map(item => (
                            <Card
                                onPress={() => navigateShowProduct(item)}
                                style={{
                                    marginTop: spacing.s12 - 2,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 1,
                                    width: "49%",
                                }}
                                height={190}
                                description={item["valor"]}
                                title={item["nome"]}
                                status={item["status"]}
                                image={item["img"]}
                            />
                        ))
                    }
                </Box>
            </Content>
        </ScrollView>
    )
}