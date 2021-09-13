const path = require('path')
const resolve = function(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // publicPath: process.env.NODE_ENV === 'production' ? '/vue-cli3-admin/' : '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false, // 是否开启eslint保存检测
    productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap
    chainWebpack: config => {
        config.resolve.alias
            .set('src', resolve('src'))
        config.optimization.runtimeChunk('single')
    },
    devServer: {
        host: 'localhost',
        port: '8274',
        hot: true,
        open: true,
        overlay: {
            warning: false,
            error: true
        },
        // proxy: {
        //     [process.env.VUE_APP_BASE_API]: {
        //         target: process.env.VUE_APP_BASE_API,
        //         changeOrigin: true,
        //         secure: false,
        //         pathRewrite: {
        //             ['^' + process.env.VUE_APP_BASE_API]: ''
        //         }
        //     }
        // }
        proxy: {
            "/mapi": {
                target: "http://localhost:5454",
                changeOrigin: true,
                pathRewrite: {
                    "^/mapi": ""
                }
            },
        },
    }
}