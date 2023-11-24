const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	publicPath: process.env.NODE_ENV === 'production' ? '/vui-cli/' : '/',
	transpileDependencies: true,
	css: {
		loaderOptions: {
			sass: {
				additionalData: `@import "@/assets/styles/mixins.scss";`,
			},
		},
	},
});
