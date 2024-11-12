function countOccurrences(arr, value) {
    return arr.reduce((acc, current) => (current === value ? acc + 1 : acc), 0);
}

let numbers = [1, 2, 2, 3, 2, 4, 5];
console.log(countOccurrences(numbers, 2)); // Output: 3
