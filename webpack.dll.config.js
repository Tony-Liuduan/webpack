const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const library = '[name]_[chunkhash:8]_lib'


module.exports = {
    entry: {
        vendors: ['react', 'react-dom', 'react-router', 'whatwg-fetch']
    },

    output: {
        filename: 'dll/[name].[chunkhash:8].dll.js',
        path: path.resolve(__dirname, 'dist'),
        library
    },

    plugins: [
        new CleanWebpackPlugin(['dist']),
        new webpack.DllPlugin({
            path: path.join(__dirname, 'dist/dll/[name]-manifest.json'),
            // This must match the output.library option above
            name: library
        }),
    ],
}