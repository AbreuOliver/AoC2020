import inputArr from "./inputArray";

const threeSum = (arr, targetSum) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            for (let k = i + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] === targetSum) {
                    result.push(i);
                    result.push(j);
                    result.push(k);
                }
            }
        }
    }
    let indexes = new Set(result);
    let indexArr = Array.from(indexes)
    // console.log("Indexes:", indexArr)
    // console.log("Values:", arr[indexArr[0]], arr[indexArr[1]], arr[indexArr[2]])
    return arr[indexArr[0]] * arr[indexArr[1]] * arr[indexArr[2]]
}

console.log(threeSum(inputArr, 2020));