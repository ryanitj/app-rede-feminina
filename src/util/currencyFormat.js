import { formatCurrency as formatCurrencyLib } from "react-native-format-currency";

export const formatCurrency = (value) => {
    return formatCurrencyLib({ amount: value, code: "BRL" })[0].padEnd(8, ",00")
}


export function formatToBRL(number) {
    // Check if the input is a number
    if (typeof number !== 'number') {
      return 'Invalid number';
    }
  
    // Format the number with two decimal places and comma separator
    const options = {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    };
  
    return new Intl.NumberFormat('pt-BR', options).format(number);
  }