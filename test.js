const reverseString = (string) => {
    return string.split('').reverse().join('');
};
const loopRevserseString = (string) => {
    let inputString = '';
    for (var x = (string.length-1); x >= 0; x--) {
        inputString += string[x];
    }
    return inputString
};
const reverseString2 = (str) => {
    return str !== '' ? reverseString2(str.substring(1)) + str.charAt(0) : '';
};
console.log(reverseString2('BMW'));
console.log(reverseString('obada'));
console.log(loopRevserseString('darwish'));