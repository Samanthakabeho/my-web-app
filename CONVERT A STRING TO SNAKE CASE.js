function toSnakeCase(str) {
    return str.replace(/\W+/g, ' ')
              .split(/ |\B(?=[A-Z])/)
              .map(word => word.toLowerCase())
              .join('_');
}

console.log(toSnakeCase("Hello World")); // Output: "hello_world"
console.log(toSnakeCase("snakeCaseString")); // Output: "snake_case_string"
