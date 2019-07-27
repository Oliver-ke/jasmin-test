// V1
const greetMe = (name) => {
	const res = `Hello ${name}, nice to meet you`;
	return res;
};

//V2
// const greetMe = (name) => {
// 	if (typeof name !== 'string') {
// 		return 'Please provide a valid name';
// 	}
// 	const res = `Hello ${name}, nice to meet you`;
// 	return res;
// };

module.exports = greetMe;
