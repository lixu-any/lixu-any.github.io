const login = async () => {
	return new Promise(resolve => {
		vk.userCenter.loginByWeixin({
			success: (data) => {
				// 成功后的逻辑
				resolve(data)
			}
		});
	})
};

const setUserAvatar = async (avatar) => {
	return new Promise(resolve => {
		vk.userCenter.setAvatar({
			data: {
				avatar
			},
			success: (data) => {
				// 成功后的逻辑
				resolve(data)
			}
		});
	})
};

const updateUser = async (data) => {
	return new Promise(resolve => {
		vk.userCenter.updateUser({
			data,
			success: (res) => {
				// 成功后的逻辑
				resolve(data)
			}
		});
	})
};

const getUserInfo = async () => {
	return new Promise(resolve => {
		vk.userCenter.getCurrentUserInfo({
			success: (data) => {
				// 成功后的逻辑
				resolve(data)
			}
		});
	})
};



export {
	login,
	setUserAvatar,
	updateUser,
	getUserInfo,
};