const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

const config = {
    entry: './js/main.js',
    output: {
        filename: 'js/[name]-[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
        }),
    ]
};

module.exports = config;