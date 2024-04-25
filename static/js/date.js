const deepCopy = (obj) => {

	if (typeof obj !== 'object' || obj === null) {
		return obj;
	}

	let result = obj instanceof Array ? [] : {};
	for (let key in obj) {
		result[key] = deepCopy(obj[key]);
	}
	return result;


};



export {
	deepCopy,
};