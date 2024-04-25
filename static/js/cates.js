const domain = "https://mp-0b97bbe8-df84-4200-a90f-65beb8e7867f.cdn.bspapp.com/online"


const CLASSLIST = [{
		name: "招聘信息",
		shortName: "招聘",
		id: "10000",
		defaultImg: domain + "/images/default/list/zhaopin.png",
		icon: domain + "/images/columns/zhaopin.png",
		show: 0,
	},
	{
		name: "求职登记",
		shortName: "求职",
		id: "11000",
		defaultImg: domain + "/images/default/list/qiuzhi.png",
		icon: domain + "/images/columns/qiuzhi.png",
		show: 0,
	},
	{
		name: "房屋租售",
		shortName: "租售",
		id: "12000",
		defaultImg: domain + "/images/default/list/chuzu.png",
		icon: domain + "/images/columns/fangwu.png",
		show: 0,
	},
	{
		name: "本地推广",
		shortName: "推广",
		id: "13000",
		defaultImg: domain + "/images/default/list/tongcheng.png",
		icon: domain + "/images/columns/tongcheng.png",
		show: 1,
		page: {
			list: "/pages/list/tuiguang",
			detail: "/pages/detail/tuiguang",
			add: "/pages/add/tuiguang",
		},
		child: [{
			title: "限时优惠",
			id: "13100"
		}, {
			title: "品牌宣传",
			id: "13101"
		}, {
			title: "爆款抢购",
			id: "13102"
		}, {
			title: "新鲜爆料",
			id: "13103"
		}, {
			title: "其他",
			id: "13104"
		}]
	},
	{
		name: "店铺推广",
		shortName: "店铺",
		id: "14000",
		defaultImg: domain + "/images/default/list/dianpu.png",
		icon: domain + "/images/columns/dianpu.png",
		show: 1,
		page: {
			list: "/pages/list/shop",
			detail: "/pages/detail/shop",
			add: "/pages/add/shop",
		},
		child: [{
			title: "美食天地",
			id: "14100"
		}, {
			title: "家具建材",
			id: "14101"
		}, {
			title: "休闲娱乐",
			id: "14102"
		}, {
			title: "个人小店",
			id: "14103"
		}, {
			title: "教育培训",
			id: "14104"
		}, {
			title: "购物天地",
			id: "14105"
		}, {
			title: "汽车服务",
			id: "14106"
		}, {
			title: "酒店旅游",
			id: "14107"
		}, {
			title: "生活服务",
			id: "14108"
		}, {
			title: "母婴专区",
			id: "14109"
		}, {
			title: "婚庆摄影",
			id: "14110"
		}, {
			title: "房地产",
			id: "14111"
		}, {
			title: "商务服务",
			id: "14112"
		}, {
			title: "金融服务",
			id: "14113"
		}, {
			title: "农业牧渔",
			id: "14114"
		}, {
			title: "医疗健康",
			id: "14115"
		}, ]

	},
	{
		name: "二手交易",
		shortName: "二手",
		id: "15000",
		defaultImg: domain + "/images/default/list/ershou.png",
		icon: domain + "/images/columns/ershou.png",
		show: 1,
		page: {
			list: "/pages/list/ershou",
			detail: "/pages/detail/ershou",
			add: "/pages/add/ershou",
		},
		child: [{
			title: "二手物品",
			id: "15100"
		}, {
			title: "二手车",
			id: "15101"
		}, {
			title: "店铺转让",
			id: "15102"
		}],
		tags: [{
				name: '1',
				value: '全新未用',
			},
			{
				name: '2',
				value: '不议价',
			},
			{
				name: '3',
				value: '自提',
			},
			{
				name: '4',
				value: '仅限同城',
			}
		],
	}, {
		name: "微友求助",
		shortName: "求助",
		id: "16000",
		defaultImg: domain + "/images/default/list/qiuzhu.png",
		icon: domain + "/images/columns/weiyou.png",
		show: 1,
		page: {
			list: "/pages/list/weiyou",
			detail: "/pages/detail/weiyou",
			add: "/pages/add/weiyou",
		},
		child: [{
			title: "打听事",
			id: "16100"
		}, {
			title: "寻人",
			id: "16101"
		}, {
			title: "寻物",
			id: "16102"
		}, {
			title: "跑腿",
			id: "16103"
		}, {
			title: "失物招领",
			id: "16104"
		}, {
			title: "其他",
			id: "16105"
		}]
	}, {
		name: "电话大全",
		shortName: "求助",
		id: "17000",
		defaultImg: domain + "/images/default/list/qiuzhu.png",
		icon: domain + "/images/columns/tel.png",
		show: 0,
	},

]


const getClassList = () => {

	let lst = []
	CLASSLIST.forEach(v => {
		if (v.show && v.show === 1) {
			lst.push(v)
		}
	})

	return lst;
};


const getClassItem = (id) => {
	let item = {}
	CLASSLIST.forEach(v => {
		if (v.id === id) {
			item = v
		}
	})
	return item;
};

const getClassImg = (item) => {

	if (typeof item == 'object') {
		if (item.img && typeof item.img == 'object') {
			return item.img.url
		}
	}

	if (item.img !== "") {
		return item.img
	}


	return getClassItem(item.columnid).defaultImg;
};




export {
	getClassList,
	getClassItem,
	getClassImg,

};