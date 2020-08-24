const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';

  return {
    entry: './src/index.js',
    output: {
      path: path.join(__dirname, 'build'),
      filename: isProd ? '[name].[contenthash].js' : '[name].[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpe?g|svg)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[hash:8].[ext]',
            },
          },
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          enforce: 'pre',
          loader: 'eslint-loader',
        },
      ],
    },
    devtool: 'inline-cheap-source-map',
    devServer: {
      contentBase: './build',
      historyApiFallback: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
    ],
    resolve: {
      modules: [
        path.resolve(__dirname, './src'),
        path.resolve(__dirname, './images'),
        'node_modules',
      ],
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@components': path.resolve(__dirname, './src/components'),
        '@navigation': path.resolve(__dirname, './src/navigation'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@images': path.resolve(__dirname, './images'),
      },
    },
    optimization: {
      moduleIds: 'hashed',
      runtimeChunk: 'single',
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  };
};
