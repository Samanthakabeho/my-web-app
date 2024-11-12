function isArmstrongNumber(num) {
    let digits = num.toString().split('');
    let numDigits = digits.length;
    let sum = digits.reduce((acc, digit) => acc + Math.pow(digit, numDigits), 0);
    return sum === num;
}

console.log(isArmstrongNumber(153)); // Output: true
console.log(isArmstrongNumber(123)); // Output: false
