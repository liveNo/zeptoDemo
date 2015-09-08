// 为requirejs 模块名称做全局配置
// 此处配置与打包配置无关(抄的)
// 请保持两处命名一致
// 此处只需要放置libs通用库和utils组件

var staticURL = './js';

require.config({
	baseUrl: staticURL,
	paths: {
		'zepto': 'libs/zeptoAll'
	}
});

//非AMD模块配置
requirejs.config({
	baseUrl: staticURL,
	shim: {
		'zepto': {
			exports: '$'
		}
	}
});