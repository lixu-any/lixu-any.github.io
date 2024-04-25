const navigateTo = (url) => {
	uni.navigateTo({
		url: url
	})

};

const redirectTo = (url) => {
	uni.redirectTo({
		url: url
	})
};

const navigateBack = (delta = 1) => {
	uni.navigateBack({
		delta
	});
};





export {
	navigateTo,
	redirectTo,
	navigateBack,
};