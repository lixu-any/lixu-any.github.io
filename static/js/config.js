const CONFIGDATA = {
	ENV: "test",
	h5: {
		domain: "https://lixu-any.github.io",
		appid: "wx48344f6a58180d6e", // 公众号appid
		scope_url: "https://open.weixin.qq.com/connect/oauth2/authorize" //授权地址
	}

}

// 授权地址拼接
const getConfigScopeUrl = (appid, redirect_uri, scope, state) => {
	return `${CONFIGDATA.h5.scope_url}?appid=${appid}&redirect_uri=${redirect_uri}&response_type=code&scope=${scope}&state=${state}`
}



export {
	CONFIGDATA,
	getConfigScopeUrl,

};