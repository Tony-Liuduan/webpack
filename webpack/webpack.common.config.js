const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const bundleConfig = require('../dll/bundle-config.json');

module.exports = {
    entry: {
        index: path.resolve(__dirname, '../src/pages/index/index.js'),
        user: path.resolve(__dirname, '../src/pages/user/index.js')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, '../src'),
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    //externals 指定的依赖不会被webpack解析,但会成为bundle里的依赖
    // externals: {
    //     "react": 'window.React',
    //     "react-dom": 'window.ReactDOM',
    //     "react-router": 'window.ReactRouter'
    // },
    plugins: [
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, '../dll/static/js'),
            to: path.resolve(__dirname, '../dist/static/js')
        }]),
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('../dll/manifest.json')
        }),
        new HtmlWebpackPlugin({
            title: '首页',
            template: path.resolve(__dirname, '../public/index.ejs'),
            filename: 'index.html',
            chunks: ['runtime', 'vendor', 'index'],
            bundleName: bundleConfig.libs.js
        }),
        new HtmlWebpackPlugin({
            title: '个人中心',
            template: path.resolve(__dirname, '../public/index.ejs'),
            filename: 'user.html',
            chunks: ['runtime', 'vendor', 'user'],
            bundleName: bundleConfig.libs.js
        })
    ]
};
