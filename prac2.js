function reverseString(str) {
    // Convert the string to an array, reverse it, and then join it back into a string
    return str.split('').reverse().join('');
}

// Example usage:
const input = "hello";
const output = reverseString(input);
console.log(output); // Output: "olleh"