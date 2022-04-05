import CopyWebpackPlugin from 'copy-webpack-plugin';
import newLocal from 'html-webpack-plugin';
import MiniCSSExtractPlugin, { loader } from 'mini-css-extract-plugin';
import { resolve } from 'path';

export const entry = resolve(__dirname, '../src/script.js');
export const output = {
    hashFunction: 'xxhash64',
    filename: 'bundle.[contenthash].js',
    path: resolve(__dirname, '../dist')
};
export const devtool = 'source-map';
export const plugins = [
    new CopyWebpackPlugin({
        patterns: [
            { from: resolve(__dirname, '../static') }
        ]
    }),
    new HtmlWebpackPlugin({
        template: resolve(__dirname, '../src/index.html'),
        minify: true,
    }),
    new MiniCSSExtractPlugin(),
];
export const module = {
    rules: [
        {
            test: /\.(html)$/,
            use: [
                'html-loader'
            ]
        },


        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
                'babel-loader'
            ]
        },

        {
            test: /\.css$/,
            use: [
                loader,
                'css-loader'
            ]
        },


        {
            test: /\.(jpg|png|gif|svg)$/,
            type: 'asset/resource',
            generator: {
                filename: 'assets/images/[hash][ext]'
            }
        },

        {
            test: /\.(ttf|eot|woff|woff2)$/,
            type: 'asset/resource',
            generator: {
                filename: 'assets/fonts/[hash][ext]'
            }
        }
    ]
};
