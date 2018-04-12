const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./htmlWebpackPluginConfig')


module.exports = {
    entry: {
        index: ['./src/pages/index/index.js'],
        user: ['./src/pages/user/index.js']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
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
        new HtmlWebpackPlugin({
            title: '首页',
            template: './public/index.ejs',
            filename: 'index.html',
            chunks: ['runtime', 'libs', 'vendor', 'index']
        }),
        new HtmlWebpackPlugin({
            title: '个人中心',
            template: './public/index.ejs',
            filename: 'user.html',
            chunks: ['runtime', 'libs',  'vendor', 'user']
        })
    ]
};
