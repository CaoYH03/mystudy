const webpackConfig = require("./build/webpackConfig.js");
const transformAssetUrls = require("./build/transformAssetUrls.js");

module.exports = {
    devServer: {
        open: process.env.NODE_ENV === "development"
    },
    chainWebpack(config) {
        config.merge(webpackConfig);
        config.module
            .rule("vue")
            .use("vue-loader")
            .tap(options => {
                options.transformAssetUrls = transformAssetUrls;
                return options;
            });
    }
};
