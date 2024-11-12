function findMajorityElement(arr) {
    const countMap = {};
    const majorityCount = Math.floor(arr.length / 2);

    for (let num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
        if (countMap[num] > majorityCount) {
            return num;
        }
    }
    return null;
}

let numbers = [3, 2, 3];
console.log(findMajorityElement(numbers)); // Output: 3
