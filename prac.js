function findLargest(numbers) {
    // Check if the array is empty
    if (numbers.length === 0) {
        return undefined; // or you could throw an error
    }
    
    // Initialize the largest number with the first element of the array
    let largest = numbers[0];
    
    // Loop through the array to find the largest number
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    
    return largest;
}

// Example usage:
const array = [3, 67, 15, 22];
const largestNumber = findLargest(array);
console.log(largestNumber); // Output: 67