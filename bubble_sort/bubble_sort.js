import Test from '../test/test.mjs'
import Utils from '../test/utils.mjs';

const bubbleSort = (arr, order = (a, b) => {return a < b}) => {
	let sortedArray = Utils.deepCopy(arr);
	let noSwapsOccurred;
	let end = arr.length;
	for (let i = end; i > 0; i--) {
		noSwapsOccurred = true;
		for (let j = 0; j < i - 1; j++) {
			if (!order(sortedArray[j], sortedArray[j+1])) {
				Utils.swap(sortedArray, j, j+1);
				noSwapsOccurred = false;
			}
		}
		if (noSwapsOccurred) break;

	}
	return sortedArray;
};

const arr1 = [1,3,4,2,5];
const arr1Sorted = bubbleSort(arr1)
const expectedArr1 = [1,2,3,4,5];
const arr2 = [2,3,5,1,4];
const arr2Sorted = bubbleSort(arr2, (a, b) => {return a > b})
const expectedArr2 = [5,4,3,2,1];

const test1 = new Test(arr1Sorted, expectedArr1, "first test");
const test2 = new Test(arr2Sorted, expectedArr2, "second test");
test1.run();
test2.run();

