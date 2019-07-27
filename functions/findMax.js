// v1
const findMax = (num1, num2) => {
	if (num1 > num2) {
		return num1;
	} else if (num2 > num1) {
		return num2;
	}
};

//v2
// const findMax = (num1, num2) => {
// 	if (num1 > num2) {
// 		return num1;
// 	} else if (num2 > num1) {
// 		return num2;
// 	} else if (num1 === num2) {
// 		return false;
// 	}
// };

//v3
// const findMax = (num1, num2) => {
// 	const cNum1 = parseInt(num1);
// 	const cNum2 = parseInt(num2);
// 	if (cNum1 && cNum2) {
// 		if (cNum1 > cNum2) {
// 			return num1;
// 		} else if (cNum2 > cNum1) {
// 			return num2;
// 		} else if (num1 === num2) {
// 			return false;
// 		}
// 	} else {
// 		return 'error';
// 	}
// };
module.exports = findMax;
