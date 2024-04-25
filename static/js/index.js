const getInformationList = async (data) => {
	return new Promise(resolve => {
		vk.callFunction({
			url: 'client/bm/pub.imformation.getImformationList',
			title: '请求中...',
			data,
			success: (res) => {
				resolve(res)
			}
		});
	})
}


export {
	getInformationList,
};