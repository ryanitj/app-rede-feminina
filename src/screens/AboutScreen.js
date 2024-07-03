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
        text: "Telefone: (47) 3368-4833"
    },
    {
        text: "E-mail: rfccitapema@outlook.com"
    },
    {
        text: "Site: https://www.redefemininaitapema.com.br/"
    },
]

const ADDRESS_TEXT = [
    {
        text: "Rua 240, 412 - Meia Praia,"
    },
    {
        text: "Itapema - SC, 88220-000"
    },
]

export const About = () => {
    return (
        <ScrollView>
            <Content>
                <Logo height={160} width={160}></Logo>
                <Typograph size={fontSize.s18} weight={fontWeight[700]} style={{ marginBottom: spacing.s12 }}>Rede Feminina Contra o Cancer</Typograph>

                <Box fullW style={{ marginBottom: spacing.s12 }}>
                    <Typograph size={fontSize.s18} style={{ marginBottom: spacing.s12 - 8 }}>Sobre Nós</Typograph>
                    <Typograph style={{ marginBottom: spacing.s12 }}>
                        A RFCC itapema é uma instituição não governamental, sem fins lucrativos, cujo objetivo é prevenir o câncer de colo de útero, realizar diagnóstico precoce do câncer de mama e apoiar pacientes mastectomizadas.
                    </Typograph>

                    <Typograph>
                        A Rede Feminina de itapema teve início em 07 de agosto de 2001. Elegeu a primeira diretoria com as senhoras: Dra. Gladis Deisvaldi Pitol, (in memoriam) Cleia Rocha Haenachen, Eliane Lobato, juntamente com algumas pessoas da cidade. com muita dedicação e comprometimento no intuito de prestar serviço em prol da saúde e bem estar das mulheres itapemenses, Iniciou seus trabalhos junto ao posto de saúde básica do bairro, após algum tempo teve início  a construção do prédio para sede própria, a partir de 30 de novembro de 2010 foi inaugurada sua sede  e desde então vem contando, ao longo dos anos, com o trabalho dedicado de inúmeras voluntárias que assumem um compromisso pela vida na busca incessante pela saúde e valorização da mulher.
                    </Typograph>
                </Box>

                <Box fullW style={{ marginBottom: spacing.s12 }}>
                    <Typograph size={fontSize.s18} style={{ marginBottom: spacing.s12 - 8 }}>Contato</Typograph>
                    {CONTACTS.map(item => <Typograph>{item["text"]}</Typograph>)}
                </Box>

                <Box fullW style={{ marginBottom: spacing.s12 }}>
                    <Typograph size={fontSize.s18} style={{ marginBottom: spacing.s12 - 8 }}>Endereço</Typograph>
                    {ADDRESS_TEXT.map(item => <Typograph>{item["text"]}</Typograph>)}
                </Box>
            </Content>
        </ScrollView>
    )
}