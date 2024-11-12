function flatten(arr) {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}

let nestedArray = [1, [2, [3, [4, 5]]]];
console.log(flatten(nestedArray)); // Output: [1, 2, 3, 4, 5]
