export const useFormatter = () => ({
    formtCurrency: (price: number) => {
        return price.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
            style: 'currency',
            currency: 'BRL'
        })
    },
    formtNumber: (value: number) => {
        return value.toLocaleString('pt-br', {
            minimumFractionDigits: 2
        })
    }
})