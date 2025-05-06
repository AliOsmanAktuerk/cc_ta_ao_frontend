export function formatNumber(number: number) {
    if (number === null || number === undefined) return '';
    let roundedNumber = Number(number).toFixed(0);
    let parts = roundedNumber.split('.');
    let integerPart = parts[0];
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return integerPart;
}

export function formatNumberNachKommer(number: number) {
    if (number === null || number === undefined) return '';
    let roundedNumber = Number(number).toFixed(2);
    let parts = roundedNumber.split('.');
    let integerPart = parts[0];
    let decimalPart = parts[1];
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return integerPart + "," + decimalPart;
}
