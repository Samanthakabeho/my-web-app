function firstDuplicate(arr) {
    let seen = new Set();
    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            return arr[i];
        }
        seen.add(arr[i]);
    }
    return -1; // If no duplicates are found
}

let numbers = [1, 2, 3, 2, 4, 5];
console.log(firstDuplicate(numbers)); // Output: 2
