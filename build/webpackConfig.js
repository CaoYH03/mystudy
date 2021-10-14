const path = require("path");
const webpack = require("webpack");
const resolve = dir => path.join(__dirname, "..", dir);

module.exports = {
    resolve: {
        alias: {
            slimvue: resolve("slimvue.js"),
            assets: resolve("src/assets")
        }
    },
    plugin: {
        "banner-plugin": {
            plugin: webpack.BannerPlugin,
            args: [
                {
                    banner: "build from slimvue"
                }
            ]
        }
    }
};
