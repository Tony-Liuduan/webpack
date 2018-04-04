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
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    // url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: 'img/[name].[hash].[ext]'
                        }
                    }
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
            title: '',
            template: './public/index.ejs',
            filename: 'user.html',
            chunks: ['runtime', 'vendor', 'user'],
        })
    ]
};
