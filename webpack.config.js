const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
<<<<<<< HEAD
=======
const Dotenv = require('dotenv-webpack');
>>>>>>> e1ae862c4af5d730065a7a73d381ccf3cf72a103

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new UglifyJsPlugin({ sourceMap: true }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'DoctorLookup',
      template: './src/index.html',
      inject: 'body'
<<<<<<< HEAD
    })
=======
    }),
    new Dotenv()
>>>>>>> e1ae862c4af5d730065a7a73d381ccf3cf72a103
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: [
            /node_modules/,
            /spec/
          ],
        loader: "eslint-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
            'file-loader',
        ],
      },
    ]
  }
};