// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var ExtractTextPlugin = require("extract-text-webpack-plugin");
// var path = require("path");

// module.exports = {
//     entry: './src/app.js',
//     output: {
//         path: path.resolve(__dirname, "dist"),
//         filename: 'app.bundle.js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.scss$/, 
//                 use: ExtractTextPlugin.extract({
//                     fallbackLoader: 'style-loader',
//                     loader: ['css-loader','sass-loader'],
//                     publicPath: '/dist'
//                 })
//             }
//         ]
//     },
//     devServer: {
//         contentBase: path.join(__dirname, "dist"),
//         compress: true,
//         stats: "errors-only",
//         open: true
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             title: 'Project Demo',
//             // minify: {
//             //     collapseWhitespace: true
//             // },
//             hash: true,
//             template: './src/index.html', // Load a custom template (ejs by default see the FAQ for details)
//         }),
//         new ExtractTextPlugin({
//             filename: 'app.css',
//             disable: false,
//             allChunks: true
//         })
//     ]
// }
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,  
                use: ExtractTextPlugin.extract({
                    fallbackLoader: 'style-loader',
                    loader: ['css-loader', 'sass-loader'],
                    publicPath: '/dist'
                })
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]

    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        stats: "errors-only",
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Project Demo',
            // minify: {
            //     collapseWhitespace: true
            // },
            hash: true,
            // excludeChunks: ['contact'],
            template: './src/index.html',
        }),
        // new HtmlWebpackPlugin({
        //     title: 'Contact Page',
        //     hash: true,
        //     chunks: ['contact'], 
        //     filename: 'contact.html',
        //     template: './src/contact.html'
        // }),
        new ExtractTextPlugin({
            filename: "app.css",
            disable: false,
            allChunks: true
        })
    ]
}