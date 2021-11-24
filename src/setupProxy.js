const proxy = require('http-proxy-middleware');

// 跨域代理，cra会按照src/setupProxy.js这个路径解析
module.exports = function (app) {
	app.use(
		proxy('/api', {
			target: 'http://localhost:3001/',
			changeOrigin: true,
			pathRewrite: {
				'^/api': ''
			}
		})
	);
};
