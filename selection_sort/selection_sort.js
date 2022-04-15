import Utils from "../test/utils.mjs";
import Test from "../test/test.mjs";

const selectionSort = (array, order = (a,b) => {return a < b}) => {
	const sortedArray = Utils.deepCopy(array);
	const length = sortedArray.length;
	for (let i = 0; i < length; i++) {
		let min = i;
		for (let j = i + 1; j < length; j++) {
			if (order(sortedArray[j], sortedArray[min])) {
				min = j;
			}
		}
		Utils.swap(sortedArray, i, min)
	}
	return sortedArray;
};

const arr1 = [3, 2, 1, 4, 5];
const sortedArr1 = selectionSort(arr1);
const expected1 = [1, 2, 3, 4, 5];
const sortedArr2 = selectionSort(arr1, (a, b) => {return a > b});
const expected2 = [5, 4, 3, 2, 1];

const test1 = new Test(sortedArr1, expected1, "First test");
const test2 = new Test(sortedArr2, expected2, "Second test");
test1.run();
test2.run();

