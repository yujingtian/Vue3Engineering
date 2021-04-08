const path = require('path');
const util = require('./util')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

function resolve(dir) {
  return path.join(__dirname, "..", dir);
}
module.exports = function(mode){
  return {
    entry: ['babel-polyfill','./src/index.ts'],
    target:"web",
    output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname,'..', 'dist'),
      clean: true,
      charset: true,
      publicPath:"/"
    },
    module: {
      rules: [
          {
            test: /\.js$/i,
            use: ['babel-loader'],
            include: path.resolve(__dirname, "..", "src"),
          },
          {
            test: /\.(css|less)$/i,
            use: [mode !== 'production' ? 'style-loader': MiniCssExtractPlugin.loader, 'css-loader','less-loader'],
          },
          {
            test:/\.ts$/,
            exclude:/node_modules/,
            // enforce:"pre",
            loader:'tslint-loader'
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
            generator:{
              filename: util.assetsPath('images/[hash][ext]'),
            }
          },
          {
            test: /\.(woff|woff2|eot|ttf|otf)$/i,
            type: 'asset/resource',
            generator:{
              filename: util.assetsPath('fonts/[hash][ext]'),
            }
          },
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options:{
                transpileOnly: true,
                appendTsSuffixTo:[/\.vue$/],
                happyPackMode: true
            }
          },
          {
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
            type: "asset",
            generator:{
              filename: util.assetsPath('meia/[hash][ext]'),
            }
          },
          {
              test: /.vue$/,
              loader: 'vue-loader'
          }
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.vue'],
      alias: {
        "@": resolve("src")
      }
    },
};
}