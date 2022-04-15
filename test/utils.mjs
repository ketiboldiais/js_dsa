class Utils {
	static deepCopy(inputObject) {
		if (typeof inputObject !== "object" || inputObject === null) {
			return inputObject;
		}
		const outputObject = Array.isArray(inputObject) ? [] : {};
		for (let key in inputObject) {
			const value = inputObject[key];
			outputObject[key] = this.deepCopy(value);
		}
		return outputObject;
	}

	static swap = (arr = null, a, b) => {
		if (arr !== null) {
			let temp = arr[a];
			arr[a] = arr[b];
			arr[b] = temp;
		} else {
			let temp = a;
			a = b;
			b = temp;
		}
	};

	static isObject(obj) {
		return obj !== null && typeof obj === "object";
	}

	static objectEquality(obj1, obj2) {
		const p1 = Object.getOwnPropertyNames(obj1);
		const p2 = Object.getOwnPropertyNames(obj2);

		if (p1.length !== p2.length) {
			return false;
		}

		for (let i = 0; i < p1.length; i++) {
			let val1 = obj1[p1[i]];
			let val2 = obj2[p1[i]];
			let areObjects = this.isObject(val1) && this.isObject(val2);
			if (
				(areObjects && !isEqual(val1, val2)) ||
				(!areObjects && val1 !== val2)
			) {
				return false;
			}
		}
		return true;
	}

	static consoleColors = {
		reset: "\x1b[0m",
		bright: "\x1b[1m",
		dim: "\x1b[2m",
		underscore: "\x1b[4m",
		blink: "\x1b[5m",
		reverse: "\x1b[7m",
		hidden: "\x1b[8m",

		fg: {
			black: "\x1b[30m",
			red: "\x1b[31m",
			green: "\x1b[32m",
			yellow: "\x1b[33m",
			blue: "\x1b[34m",
			magenta: "\x1b[35m",
			cyan: "\x1b[36m",
			white: "\x1b[37m",
			crimson: "\x1b[38m",
		},
		bg: {
			black: "\x1b[40m",
			red: "\x1b[41m",
			green: "\x1b[42m",
			yellow: "\x1b[43m",
			blue: "\x1b[44m",
			magenta: "\x1b[45m",
			cyan: "\x1b[46m",
			white: "\x1b[47m",
			crimson: "\x1b[48m",
		},
	};
}

export default Utils;
