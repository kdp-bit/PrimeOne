const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const CopyPlugin = require('copy-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';
module.exports = {
    entry: {
        bundle: './src/app.js'
    } ,
    output: {
        path: path.resolve(__dirname, '../dist')
    },
    devtool: isDevelopment && "source-map",
    devServer: {
        port: 3000,
        open: true,
        contentBase: path.join(__dirname, "../src"),
    },
    module: {
        rules: [
            { test: /\.handlebars$/, loader: "handlebars-loader" },
            {
                test: /\.(scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: isDevelopment,
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            autoprefixer: {
                                browsers: ["last 2 versions"]
                            },
                            sourceMap: isDevelopment,
                            plugins: () => [
                                autoprefixer
                            ]
                        },
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: isDevelopment
                        }
                    }
                ]
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'fonts/'
                        }
                    }
                ]
            }

        ]
    },
    plugins: [
        /** Since Webpack 4 */
        new webpack.LoaderOptionsPlugin({
            options: {
                handlebarsLoader: {}
            }
        }),
        new MiniCssExtractPlugin({
            filename: "[name]-styles.css",
            chunkFilename: "[id].css"
        }),

        new HtmlWebpackPlugin({
            title: 'My awesome service',
            template: './src/index.handlebars',
            minify: !isDevelopment && {
                html5: true,
                collapseWhitespace: true,
                caseSensitive: true,
                removeComments: true,
                removeEmptyElements: true
            },
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new CopyPlugin([
            { from: 'src/static', to: 'static' },
        ]),
    ]
};
