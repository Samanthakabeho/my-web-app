function mostFrequentChar(str) {
    let frequency = {};
    let maxCount = 0;
    let maxChar = '';

    for (let char of str) {
        if (!frequency[char]) {
            frequency[char] = 1;
        } else {
            frequency[char]++;
        }

        if (frequency[char] > maxCount) {
            maxCount = frequency[char];
            maxChar = char;
        }
    }

    return maxChar;
}

console.log(mostFrequentChar("hello world")); // Output: "l"
