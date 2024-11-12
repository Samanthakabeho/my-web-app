function camelToKebab(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

console.log(camelToKebab("camelCaseString")); // Output: "camel-case-string"
