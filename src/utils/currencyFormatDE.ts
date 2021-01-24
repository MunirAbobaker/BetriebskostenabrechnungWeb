export function currencyFormatDE(num) {
    const formatted =parseFloat(num.toString().replace(',', '.'));
    return (
         formatted
            .toFixed(3)  
            .replace('.', ',')  
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' €'
    )  
}
