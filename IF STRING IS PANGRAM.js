function isPangram(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let lowerStr = str.toLowerCase();
    for (let char of alphabet) {
        if (!lowerStr.includes(char)) {
            return false;
        }
    }
    return true;
}

console