import { ActivityIndicator, View } from "react-native"

export const Loading = ({ visible }) => {
    if (visible) {
        return (
            <View
                style={{
                    position: 'absolute',
                    backgroundColor: "#00000040",
                    zIndex: 9999,
                    justifyContent: 'center',
                    width: "100%",
                    height: "100%",
                    alignItems: 'center',
                }}
            >
                <ActivityIndicator size={"large"} color={"white"}></ActivityIndicator>
            </View>
        )
    }

    return <></>
}