export function currencyFormatDE(num) {
    console.log(num)
    const formatted =parseFloat(num.toString().replace(',', '.'))
    console.log(formatted)
    console.log(formatted)
    return (
        formatted
            .toFixed(3) // always two decimal digits
            .replace('.', ',') // replace decimal point character with ,
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' €'
    ) // use . as a separator
}