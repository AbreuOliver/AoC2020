import inputArr from "./inputArray";

/* Find the two entries that sum to 2020; 
and multiply them together */


function findPair(arr, targetSum) {
	// Create a dictionary using JavaScript object
	let dictionary = {};
	// Use "for" loop to... 
	for (let index = 0; index < arr.length; index++) {
		// ...assign the given array element at index to be the dictionary key
		let dictKey = arr[index];
		// Let new index equal dictionary at explicit index
		dictionary[dictKey] = index;
	}
	for (let index = 0; index < arr.length; index++) {
		// Create variable "diff", equal to targetSum minus the array at current index
		let diff = targetSum - arr[index];
		// If dictionary has key equal to value "diff" and dictionary at value is not index
		if (dictionary.hasOwnProperty(diff) && dictionary[diff] !== index) {
			// Create variable to hold indexes of the two values that equal target sum
			let indexResult = [index, dictionary[diff]];
			// console.log("Indexes of correct values:", indexResult);
			let valueOne = arr[indexResult[0]];
			let valueTwo = arr[indexResult[1]];
			// Multiply values that equal target sum together to get final result
			let finalResult = valueOne * valueTwo;
			// console.log(`${valueOne} times ${valueTwo} equals ${finalResult}`);
			return finalResult;
		}
	}
}

console.log(findPair(inputArr, 2020))