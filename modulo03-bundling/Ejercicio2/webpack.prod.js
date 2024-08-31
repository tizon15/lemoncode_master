import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import path from 'path';
import url from 'url';
import Dotenv from 'dotenv-webpack';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default merge(common, {
  mode: 'production',
  output: {
    filename: 'js/[name].[chunkhash].js',
    assetModuleFilename: 'images/[hash][ext][query]',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCase',
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].[chunkhash].css',
      chunkFilename: '[id].css',
    }),
    new Dotenv({
      path: './prod.env',
    }),
  ],
});
