const path = require('path'); // path utility
const HtmlWebpackPlugin = require('html-webpack-plugin');
// init HTML Webpack Plugin
// const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
//     template: './public/index.html', // archivo de nuestra vista
//     inject: 'body' // donde insertaremos nuestro script
// })
const webpack = require('webpack');

const config = {
    entry: './src/index.js', // archivo js que codearemos
    output: {
        path: path.resolve(__dirname,'public'), //resolver el path de salida
        filename: 'bundle.js', // archivo js compilado
        publicPath: '/' // archivo js compilado
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
                exclude: /node_modules/
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                query: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],

                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: ['style-loader','css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
          __isBrowser__:"true"  
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
    // plugins: [HtmlWebpackPluginConfig] // configuración de nuestra vista
}
module.exports = config; //exportamos a webpack nuestra configuración