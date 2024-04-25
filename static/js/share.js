import {
	CONFIGDATA
} from "./config";

const sharePage = (data) => {

	let shareData = {
		title: "安阳便民服务", // 分享标题
		desc: "便民服务平台，招聘求职 房屋租售，微友求助 便民查询", // 分享描述，仅“转发给朋友”时有效
		link: window.location.href, // 分享链接地址
		imgUrl: "https://mp-0b97bbe8-df84-4200-a90f-65beb8e7867f.cdn.bspapp.com/online/images/logo.png" // 分享图片url地址
	}

	if (data) {
		if (data.title && data.title !== '') {
			shareData.title = data.title
		}

		if (data.desc && data.desc !== '') {
			shareData.desc = data.desc
		}

		if (data.img && data.img !== '') {
			shareData.imgUrl = data.img
		}
	}



	if (shareData.link.indexOf('detail') === -1) {
		shareData.link = CONFIGDATA.h5.domain
	}

	uni.vk.h5.updateShareData(shareData);


};



export {
	sharePage,
};