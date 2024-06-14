import { formatCurrency as formatCurrencyLib } from "react-native-format-currency";

export const formatCurrency = (value) => {
    return formatCurrencyLib({ amount: value, code: "BRL" })[0].padEnd(8, ",00")
}