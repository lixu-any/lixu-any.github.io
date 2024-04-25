import {
	getClassItem
} from "./cates"



export default {
	Detail(cateid) {
		const item = getClassItem(cateid)
		let ps = ''
		if (item.page && item.page.detail && item.page.detail != "") {
			ps = item.page.detail
		}
		return ps
	},
	List(cateid) {
		const item = getClassItem(cateid)
		let ps = ''
		if (item.page && item.page.list && item.page.list != "") {
			ps = item.page.list
		}
		return ps

	}
	,
	Add(cateid) {
		const item = getClassItem(cateid)
		let ps = ''
		if (item.page && item.page.add && item.page.add != "") {
			ps = item.page.add
		}
		return ps
	
	}
}