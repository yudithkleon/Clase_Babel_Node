//aqui se indica cual es el archivo de entrada y cual es el archivo de salia
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  entry: [
    '@babel/polyfill', 
    './src/app/index.js'], 
  mode: 'production',
 // mode: 'development',
  output: {
    filename: 'js/app.bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  
  devServer:{
    port:5050
  },
  module:{
    rules: [
        {
           test: /\.css$/i,
           use: ['style-loader', 'css-loader'],         
},
{
    test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader'],
 },
 {
    test: /\.js$/,
    loader: 'babel-loader',
  }
    ]
 },
   
  plugins: [
    new MiniCssExtractPlugin({
        filename: 'css/app.bundle.css'
    }),

   new HTMLWebpackPlugin({template: './src/app/index.html', 
    minify:  {
        collapseWhitespace: true,
        removeComments: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true

      }
      })
  ],

};
//entry archivo de entrda
//filename archivo de salida
//path crea un directorio con el nonbre Build
//minify reduce espacios, comentarios