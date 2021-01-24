"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyFormatDE = void 0;
function currencyFormatDE(num) {
    console.log(num);
    var formatted = parseFloat(num.toString().replace(',', '.'));
    console.log(formatted);
    console.log(formatted);
    return (formatted
        .toFixed(3) // always two decimal digits
        .replace('.', ',') // replace decimal point character with ,
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' €'); // use . as a separator
}
exports.currencyFormatDE = currencyFormatDE;
//# sourceMappingURL=currencyFormatDE.js.map