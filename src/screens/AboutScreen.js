import { ScrollView, View } from "react-native"
import { Logo } from "../components/Logo"
import { Typograph } from "../components/Typograph"
import { Content } from "../components/Content"
import { Box } from "../components/Box"
import { spacing } from "../constants/spacing"
import { fontSize } from "../constants/fontSize"
import { fontWeight } from "../constants/fontWeight"

const CONTACTS = [
    {
        text:"Telefone: (99) 9 9999-9999"
    },
    {
        text:"E-mail: xxxxx@gmail.com"
    },
    {
        text:"Site: https://www.redefemininaitapema.com.br/"
    },
]

export const About = () => {
    return (
        <ScrollView>
            <Content>
                <Logo height={160} width={160}></Logo>
                <Typograph size={fontSize.s18} weight={fontWeight[700]} style={{marginBottom:spacing.s12}}>Rede Feminina Contra o Cancer</Typograph>

                <Box fullW style={{marginBottom:spacing.s12}}>
                    <Typograph size={fontSize.s18} style={{marginBottom:spacing.s12 - 8}}>Sobre Nós</Typograph>
                    <Typograph>
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been 
                        the industry's standard dummy text ever since the 
                        1500s, when an unknown printer took a galley of 
                        type and scrambled it to make a type specimen 
                        book. It has survived not only five centuries, but 
                        also the leap into electronic typesetting, remaining 
                        essentially unchanged. It was popularised in the 
                        1960s with the release of Letraset sheets containing.
                    </Typograph>
                </Box>

                <Box fullW style={{marginBottom:spacing.s12}}>
                    <Typograph size={fontSize.s18} style={{marginBottom:spacing.s12 - 8}}>Contato</Typograph>
                    {CONTACTS.map(item => <Typograph>{item["text"]}</Typograph>)}
                </Box>
            </Content>
        </ScrollView>
    )
}