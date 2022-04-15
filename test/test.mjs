import Utils from "./utils.mjs";

class Test {
	constructor(result, expected, testName) {
		this.result = result;
		this.expected = expected;
		this.testCount = 0;
		this.testName = () => {
			if (testName !== undefined) {
				return testName;
			} else {
				this.testCount++;
				return `test${this.testCount}`;
			}
		};
		this.testTimeCount = 0;
		this.ns_per_sec = 1e9;
		this.ms_per_sec = 1e-6;
	}
	primitiveTest() {
		return this.result === this.expected;
	}
	objectTest() {
		return Utils.objectEquality(this.result, this.expected);
	}

	run() {
		let test_result;
		if (Utils.isObject(this.result) && Utils.isObject(this.expected)) {
			test_result = this.objectTest();
		} else {
			test_result = this.primitiveTest();
		}
		if (test_result) {
			this.successMessage();
		} else {
			this.failMessage();
		}
	}

	successMessage() {
		const message = `\n${this.testName()} passed\n`;
		const diff = `  result: ${this.result}\n   expected: ${this.expected}\n`;
		console.log(
			Utils.consoleColors.fg.green,
			message,
			diff,
			Utils.consoleColors.reset
		);
	}

	failMessage() {
		const message = `\n${this.testName()} FAILED\n`;
		const diff = `  result: ${this.result}\n   expected: ${this.expected}\n`;
		console.log(
			Utils.consoleColors.fg.red,
			message,
			diff,
			Utils.consoleColors.reset
		);
	}

	time() {
		const start = process.hrtime();
		method;
		const diff = process.hrtime(start);
		const duration = diff[0] * this.ns_per_sec + diff[1] * this.ms_per_ns;
		console.log(`time-test${this.testTimeCount}: ${duration}`);
		this.testTimeCount++;
	}

	testArray(elementCount) {
		let arr = [];
		for (let i = 0; i < elementCount; i++) {
			arr[i] = i;
		}
		return arr;
	}
}

export default Test;
