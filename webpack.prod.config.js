const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');
const common = require('./webpack.common.config.js');
const pkg = require('./package.json')


module.exports = merge(common, {
    //devtool: 'source-map',
    entry: {
        //libs: Object.keys(pkg.dependencies)
        libs: ['react', 'react-dom', 'react-router', 'whatwg-fetch'], // 分离第三方应用
        vendor: ['./src/components_common/asyncComponent']
    },
    output: {
        filename: 'js/[name].[chunkhash:8].js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: 'js/[name].[chunkhash:8].chunk.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader"
                    ]
                })
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'sass-loader'
                    ]
                })
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
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
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        // new BundleAnalyzerPlugin(),
        // new ManifestPlugin(),
        // new UglifyJSPlugin(),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        /* 
        * webpack用插件CommonsChunkPlugin进行打包的时候，
        * 将符合引用次数(minChunks)的模块打包到name参数的数组的第一个块里（chunk）,
        * 然后数组后面的块依次打包(查找entry里的key,没有找到相关的key就生成一个空的块)，
        * 最后一个块包含webpack生成的在浏览器上使用各个块的加载代码，
        * 所以页面上使用的时候最后一个块必须最先加载
        */
        new webpack.optimize.CommonsChunkPlugin({
            //name: 'vendor',
            name: ['vendor', 'libs', 'runtime'],
            // minChunks: Infinity // 随着 入口chunk 越来越多，这个配置保证没其它的模块会打包进 公共chunk
            minChunks: function (module, count) {
                const resource = module.resource
                // 以 .css 结尾的资源，重复 require 大于 1 次
                return resource && /\.(css|scss)$/.test(resource) && count > 1
            }
        }),
        new ExtractTextPlugin('css/[name].[contenthash:8].css')
    ]
});