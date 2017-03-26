const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const path = require('path');

const config = {
    entry: {
        a: './js/a.js',
        b: './js/b.js',
        c: './js/c.js',
    },
    output: {
        filename: 'js/[name]-[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'a.html',
            template: './index.html',
            chunks:['a']
            //chunks: Allows you to add only some chunks (指定chunks)
        }),
        new HtmlWebpackPlugin({
            filename: 'b.html',
            template: './index.html',
            chunks:['b']
        }),
        new HtmlWebpackPlugin({
            filename: 'c.html',
            template: './index.html',
            chunks:['c']
        })
    ]
};

module.exports = config;