const devMode = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: devMode,
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'app.js',
        publicPath: '/'
    },
    devServer: {
        port: process.env.PORT || 3000,
        contentBase: './public',
        historyApiFallback: true,
        allowedHosts: [
            'starwarsportapp.herokuapp.com',
            'localhost'
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css'
        })
    ],
    module: {
        rules: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                plugins: ['@babel/plugin-proposal-object-rest-spread',
                 '@babel/plugin-proposal-class-properties',
                 '@babel/plugin-transform-runtime']
            }
        },
        {
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
                ]
        },
        {
            test: /\.(png|svg|jpg|gif|ttf|woff2|woff|eot)$/,
            use: ['file-loader']
        }]
    }
};