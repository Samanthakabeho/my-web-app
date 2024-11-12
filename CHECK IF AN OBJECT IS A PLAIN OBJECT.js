function isPlainObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
}

console.log(isPlainObject({})); // Output: true
console.log(isPlainObject(new Date())); // Output: false
