const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    devtool: 'inline-source-map',
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[ext]'
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
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './public'
    },
    plugins: [
        new webpack.NamedModulesPlugin()
    ]
});