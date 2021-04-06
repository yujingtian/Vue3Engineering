const { merge }= require("webpack-merge")
// const webpack = require("webpack")
const commonConfig = require("./webpack.common")
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const config = require('./config')
const path = require("path")
const util = require("./util")
const { VueLoaderPlugin } = require("vue-loader");

process.env.NODE_ENV = "production"


module.exports = merge(commonConfig(process.env.NODE_ENV), {
    mode:"production",
    devtool:config.build.productionSourceMap? "source-map" : false,
    output:{
        filename: util.assetsPath('js/[name].[contenthash].js'),
        publicPath:""
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack5 + vue3 + ts',
            favicon:"./favicon.ico"
        }),
        new WebpackManifestPlugin(),
        new MiniCssExtractPlugin({
            filename:util.assetsPath("css/[name].css")
        }),
        new CopyWebpackPlugin({
            patterns:[
                {
                    from: path.resolve(__dirname, '../static'),
                    to:"static/static",
                }
            ]
        }),
        new VueLoaderPlugin()
    ],
    optimization: {
        minimize:true,
        runtimeChunk: 'single',
        moduleIds: 'deterministic',    //有利于长期缓存 防止verdor hash值发生变化
        usedExports: true,      //未被使用的exports不会被导出到bundle中
        splitChunks: {
            cacheGroups:{
                vendor:{
                    test:/[\\/]node_modules[\\/]/,
                    name:"vendors",
                    chunks: 'all',
                }
            }
        },
    },
})