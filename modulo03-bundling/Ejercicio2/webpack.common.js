import path from 'path';
import url from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
export default {
  context: path.resolve(__dirname, 'src'),
  entry: {
    app: './index.ts',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(t|j)s?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  // Los plugins sirven para crear el fichero con la extension requerida en dist
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html', //Name of file in ./dist/
      template: './index.html', //Name of template in ./src
      scriptLoading: 'blocking', // Load the scripts correctly
    }),
    new CleanWebpackPlugin(),
  ],
};
