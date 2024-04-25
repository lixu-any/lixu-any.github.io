const addImformation = async (data) => {

	return new Promise(resolve => {
		vk.callFunction({
			url: 'client/bm/imformation.addImformation',
			title: '请求中...',
			data: data,
			success: (res) => {
				resolve(res)
			}
		});
	})
}

const getImformationList = async (data) => {
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

const getImformationDetail = async (id) => {
	return new Promise(resolve => {
		vk.callFunction({
			url: 'client/bm/pub.imformation.getImformationDetail',
			data: {
				id
			},
			success: (res) => {
				updateImformationViews(id)
				resolve(res)
			}
		});
	})
}

// 更新阅读量
const updateImformationViews = async (id) => {
	return new Promise(resolve => {
		vk.callFunction({
			url: 'client/bm/imformation.updateViewsCount',
			data: {
				id
			},
			success: (res) => {
				resolve(res)
			}
		});
	})
}

const deleteImformation = async (_id) => {
	return new Promise(resolve => {
		vk.callFunction({
			url: 'client/bm/imformation.deleteImformation',
			data: {
				_id
			},
			success: (res) => {
				resolve(res)
			}
		});
	})
}

const refreshImformation = async (_id) => {
	return new Promise(resolve => {
		vk.callFunction({
			url: 'client/bm/imformation.refreshImformation',
			data: {
				_id
			},
			success: (res) => {
				resolve(res)
			}
		});
	})
}



export {
	addImformation,
	getImformationList,
	getImformationDetail,
	updateImformationViews,
	deleteImformation,
	refreshImformation,
};