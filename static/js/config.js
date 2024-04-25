const CONFIGDATA = {
	ENV: "test",
	h5: {
		domain: "https://lixu-any.github.io",
		appid: "wx48344f6a58180d6e", // 公众号appid
		scope_url: "https://open.weixin.qq.com/connect/oauth2/authorize" //授权地址
	}

}

const setConfigData = () => {

	const domain = window.location.protocol + "://" + window.location.host
	console.log("domain::", domain)
	CONFIGDATA.h5.domain = domain
	if (domain.indexOf("localhost") !== -1) {
		CONFIGDATA.ENV = "test"
	} else {
		CONFIGDATA.ENV = "prod"
	}
}


// 授权地址拼接
const getConfigScopeUrl = (appid, redirect_uri, scope, state) => {
	alert(redirect_uri)
	return `${CONFIGDATA.h5.scope_url}?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=${state}`
}



export {
	CONFIGDATA,
	setConfigData,
	getConfigScopeUrl,

};