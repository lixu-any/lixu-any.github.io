// 平台类型
const getPlatForm = (appid, redirect_uri, scope, state) => {
	// 判断是否在微信中打开
	if (typeof WeixinJSBridge === 'object' && typeof WeixinJSBridge.invoke === 'function') {
		return "weixin"
	} else {
		return ""
	}
}



export {
	getPlatForm,

};