const { merge } = require("webpack-merge")
const commonConfig = require("./webpack.common")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require("webpack")
const config = require("./config")
const path = require("path")
const { VueLoaderPlugin } = require("vue-loader");

process.env.NODE_ENV = "development"

module.exports = merge(commonConfig(process.env.NODE_ENV), {
    mode: "development",
    output:{
        filename:"[name].js"
    },
    devServer: {
        host: config.dev.devServer.host,
        port: config.dev.devServer.port,
        hot: true,
        open: false,
        publicPath: config.dev.publicPath,
        historyApiFallback: {
            rewrites:[
                { from: /./, to: '/404.html' },
            ]
        },     //会响应404页面
        allowedHosts: config.dev.devServer.allowedHosts,   //服务白名单
        compress: true,    //开启gizp压缩
        overlay: {
            errors : true,
            warnings : false,
        },    //出现错误，开启全屏遮罩提醒
        proxy:  config.dev.devServer.proxy,
        // quiet:true,
        clientLogLevel:"silent"
    },
    devtool:"inline-source-map",   //正式环境会影响性能
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            name: 'index.html',
        }),
        // new webpack.DefinePlugin({
        //     __VUE_PROD_DEVTOOLS__: false,
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, '../static'),
                    to:"static",
                }
            ]
        }),
        new VueLoaderPlugin()
    ],
    optimization:{
        emitOnErrors:true,
        runtimeChunk: 'single',
    },
})