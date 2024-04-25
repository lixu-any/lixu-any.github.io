const uploadFile = async (file, typ = 'png') => {

	return new Promise(resolve => {

		uni.showLoading({
			title: "上传中",
			mask: true
		})

		uniCloud.uploadFile({
			filePath: file,
			cloudPath: new Date().getFullYear() + '/' + (new Date().getMonth() + 1) + '/' +
				new Date()
				.getDate() + '/' + generateRandomNumber() + '.' + typ,
			cloudPathAsRealPath: true,
			success: function(res) {
				if (res.fileID) {
					resolve(res.fileID)
				} else {
					resolve("")
				}

			},
			complete: function() {
				uni.hideLoading()
			}
		})

	})

};






const generateRandomNumber = () => {
	// 生成一个 0 到 1 之间的随机数
	let randomNumber = Math.random();
	// 将随机数乘以 10 的 12 次方，确保结果在 0 到 1000000000000 之间
	randomNumber *= 1000000000000;
	// 获取随机数的整数部分
	let integerPart = Math.floor(randomNumber);
	// 获取随机数的小数部分
	let decimalPart = randomNumber % 1;
	// 将整数部分和小数部分拼接起来，得到 12 位的随机数
	let randomNumberString = integerPart.toString() + decimalPart.toString().padStart(12, '0');
	return randomNumberString;
}




export {
	uploadFile,
};