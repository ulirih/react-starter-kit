const path = require('path');
const htmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const extractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = {
    entry: [
        './src/index.tsx',
    ],
    output: {
        path: path.join(__dirname, "/build"),
        filename: 'bundle.js'
    },
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: path.join(__dirname, '/node_modules/'),
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]_[local]_[hash:base64]",
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                include: path.join(__dirname, '/src/'),
                loaders: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html"
        }),
        new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
        new extractTextPlugin('style.css'),
        new BundleAnalyzerPlugin()
    ]
};