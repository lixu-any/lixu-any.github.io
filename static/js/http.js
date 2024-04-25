const ENV = "pre"

const getApiUrl = () => {

	let apiUrl = ''
	switch (ENV) {
		case 'local':
			apiUrl = "http://127.0.0.1:8905/client-bmfw/"
			break
		case 'pre':
			apiUrl = "https://wxsdk-data-pre.d3games.com/client-bmfw/"
			break
		default:
			apiUrl = "https://wxsdk-data-pre.d3games.com/client-bmfw/"
			break
	}

	return apiUrl;


};

const httpRequest = async (url, data, loading = false, header = null, method = 'POST') => {
	return new Promise(resolve => {

		if (loading) {
			uni.showLoading({
				mask: true,
				title: '加载中..'
			})
		}

		data.sign = '1'
		data.sign_type = '1'
		data.time_stamp = '1'
		data.ver = '1'
		data.uid = 100
		data.token = "100"

		uni.request({
			url: getApiUrl() + url,
			data: data,
			method: method,
			header: header,
			dataType: 'json',
			success(res) {
				if (res.data && res.data.code && res.data.code !== '0') {
					uni.showToast({
						title: res.data.msg
					})
				} else {
					resolve(res.data)
				}

			},
			fail(res) {
				console.log("fail::", res, url)
			},
			complete() {
				if (loading) {
					uni.hideLoading()
				}
			}
		})

	})
}




export {
	getApiUrl,
	httpRequest,
};