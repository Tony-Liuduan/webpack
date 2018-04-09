const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: {
        index: './src/pages/index/index.js',
        user: './src/pages/user/index.js'
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
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: './public/index.ejs',
            filename: 'index.html',
            chunks: ['runtime', 'vendor', 'index'],
        }),
        new HtmlWebpackPlugin({
            title: '个人中心',
            template: './public/index.ejs',
            filename: 'user.html',
            chunks: ['runtime', 'vendor', 'user'],
        })
    ]
};
