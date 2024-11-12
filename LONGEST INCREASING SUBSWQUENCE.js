function longestIncreasingSubsequence(arr) {
    let lis = Array(arr.length).fill(1);

    for (let i = 1; i < arr.length; i++) {
        for (let j = 0; j < i; j++) {
            if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
                lis[i] = lis[j] + 1;
            }
        }
    }

    return Math.max(...lis);
}

let numbers = [10, 22, 9, 33, 21, 50, 41, 60, 80];
console.log(longestIncreasingSubsequence(numbers)); // Output: 6
