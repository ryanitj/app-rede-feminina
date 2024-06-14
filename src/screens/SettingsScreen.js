import { Content } from '../components/Content'
import { Input } from '../components/Input'
import { Box } from '../components/Box'
import { Card } from '../components/Card'
import { ScrollView } from 'react-native'
import { spacing } from '../constants/spacing'
import { Button } from '../components/Button'
import { useNavigation } from '@react-navigation/native'
import { useState } from 'react'

const products = [
    {
        title:"Produto 1",
        description:"Descricao teste produto",
        image:"",
    },
    {
        title:"Produto 1",
        description:"Descricao teste produto",
        image:"",
    },
    {
        title:"Produto 1",
        description:"Descricao teste produto",
        image:"",
    },
    {
        title:"Produto 1",
        description:"Descricao teste produto",
        image:"",
    },
    {
        title:"Produto 1",
        description:"Descricao teste produto",
        image:"",
    },
    {
        title:"Produto 1",
        description:"Descricao teste produto",
        image:"",
    },
    {
        title:"Produto 1",
        description:"Descricao teste produto",
        image:"",
    },
    {
        title:"Produto 1",
        description:"Descricao teste produto",
        image:"",
    },
]

export const Settings = () => {
    const [image, setImage] = useState(null);
    const navigation = useNavigation()

    const navigateAddProduct = () => {
        navigation.navigate("ProductCreate")
    }

    return (
        <ScrollView>
            <Content spacingVariant={spacing.s12 - 4}>
                <Input variant='search'></Input>

                <Box fullW style={{marginTop:spacing.s12 - 2}}>
                    <Button onPress={navigateAddProduct} text={"Adicionar produto"}/>
                </Box>

                <Box 
                    fullW
                    style={{
                        flexWrap:"wrap",
                        flexDirection:"row",
                        justifyContent:"space-between",
                    }}
                >
                    {
                        products.length >= 0 && products.map(item => (
                            <Card
                                style={{
                                    marginTop:spacing.s12 - 2, 
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation:1,
                                    width:"49%", 
                                }}
                                height={190}
                                description={item["description"]}
                                title={item["title"]}
                                image={item["image"]}
                            />
                        ))
                    }
                </Box>
            </Content>
        </ScrollView>
    )
}