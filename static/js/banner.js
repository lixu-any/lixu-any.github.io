var bannerService = {

	sk: 'banners-list',



	getBannerList: async function(page) {

		return new Promise(resolve => {
			let blist = vk.getStorageSync(bannerService.sk);
			let slst = []
			if (blist) {
				for (var i = 0; i < blist.length; i++) {
					if (blist[i].page === page) {
						slst.push(blist[i])
					}
				}
				resolve(slst)
				console.log("cache banner:", slst)
			} else {
				vk.callFunction({
					url: 'client/bm/pub.banners.getList',
					success: (res) => {

						blist = res.data

						for (var i = 0; i < blist.length; i++) {
							if (blist[i].page === page) {
								slst.push(blist[i])
							}
						}

						vk.setStorageSync(bannerService.sk, blist);

						resolve(slst)

						console.log("db banner:", slst)

					}
				});
			}
		})
	},

}

module.exports = bannerService;