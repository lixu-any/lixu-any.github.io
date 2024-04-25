const getInformationList = async (data) => {
	return new Promise(resolve => {
		vk.callFunction({
			url: 'client/bm/pub.imformation.getImformationList',
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