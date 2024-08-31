import common from './webpack.common.js';
import { merge } from 'webpack-merge';
import path from 'path';
import url from 'url';
import Dotenv from 'dotenv-webpack';
const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default merge(common, {
  mode: 'development',
  entry: { appStyles: './style.scss' },
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                localIdentContext: path.resolve(__dirname, 'src'),
              },
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new Dotenv({
      path: './dev.env',
    }),
  ],
  stats: 'errors-only',
  devtool: 'eval-source-map',
  devServer: {
    port: 8082,
  },
});
