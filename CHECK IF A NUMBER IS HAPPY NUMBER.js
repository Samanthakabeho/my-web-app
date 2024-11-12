function isHappyNumber(num) {
    let seen = new Set();
    while (num !== 1 && !seen.has(num)) {
        seen.add(num);
        num = num.toString().split('').reduce((acc, digit) => acc + digit * digit, 0);
    }
    return num === 1;
}

console.log(isHappyNumber(19)); // Output: true
console.log(isHappyNumber(2)); // Output: false
