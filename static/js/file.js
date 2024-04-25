const getFileUrl = (obj) => {

	if (typeof obj == 'object' && obj.url) {
		return obj.url;
	}

	return '';


};



export {
	getFileUrl,
};