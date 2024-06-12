import { BaseToast } from "react-native-toast-message";

export const toastConfig = {
    success: (props) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: '#20ad68', backgroundColor: "#20ad68" }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 14,
                fontWeight: '400',
                color: 'white'
            }}
            text2Style={{
                fontSize: 12,
                fontWeight: '400',
                color: 'white'
            }}
        />
    ),
    error: (props) => (
        <BaseToast
            {...props}
            style={{ borderLeftColor: '#E57373', backgroundColor: "#E57373" }}
            contentContainerStyle={{ paddingHorizontal: 15 }}
            text1Style={{
                fontSize: 14,
                fontWeight: '400',
                color: 'white'
            }}
            text2Style={{
                fontSize: 12,
                fontWeight: '400',
                color: 'white'
            }}
        />
    ),

}