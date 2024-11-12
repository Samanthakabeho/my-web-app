function findPrimesUpTo(n) {
    let primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(findPrimesUpTo(20)); // Output: [2, 3, 5, 7, 11, 13, 17, 19]
