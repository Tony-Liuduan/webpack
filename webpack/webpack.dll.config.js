const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const AssetsPlugin = require('assets-webpack-plugin')
const library = '[name]_[chunkhash:8]_dll'
const libs = [
    'react',
    'react-dom',
    'react-router',
    'react-redux',
    'redux',
    'whatwg-fetch'
];


module.exports = {
    
    entry: {
        libs
    },

    output: {
        path: path.resolve(__dirname, '../dll'),
        filename: 'static/js/[name].[chunkhash:8].js',
        library
    },

    plugins: [
        new CleanWebpackPlugin(['dll'], {
            "root": path.resolve(__dirname, '../'),
            //一个根的绝对路径.
            "verbose": true,
            //将log写到 console.
            "dry": false,
            //不要删除任何东西，主要用于测试.
            //"exclude": ["js"]
            //排除不删除的目录，主要用于避免删除公用的文件
        }),
        //new UglifyJSPlugin(),
        new webpack.DllPlugin({
            path: path.resolve(__dirname, '../dll/manifest.json'),
            name: library,
            context: __dirname,
        }),
        new AssetsPlugin({
            filename: 'bundle-config.json',
            path: path.resolve(__dirname, '../dll'),
        })
    ],
}