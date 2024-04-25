const showLoading = (title = '加载中') => {
	uni.showLoading({
		title: title
	})
};


const hideLoading = () => {
	uni.hideLoading()
};


const showToast = (title) => {
	vk.toast(title);

}


const showToastRedirect = (title, url) => {
	vk.toast(title, "none", () => {
		uni.redirectTo({
			url: url
		})
	});

}



export {
	showLoading,
	hideLoading,
	showToast,
	showToastRedirect,
};