import { View, Text } from 'react-native'
import { spacing } from '../constants/spacing'
import { AntDesign } from '@expo/vector-icons';
import { colors } from '../constants/colors';
import { Content } from '../components/Content';
import { useEffect, useState } from 'react';

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
    return (
        <Content>
            {
                mock && mock.map(item => (
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
                        justifyContent:"space-around",
                        alignItems:"center",
                        flexDirection:"row",
                        marginBottom:spacing.s12
                    }}>
                        <AntDesign name="infocirlce" size={24} color={colors["blue"]}/>
                        <Text>{item["text"]}</Text>
                    </View>
                ))
            }
        </Content>
    )
}