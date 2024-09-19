import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from "mini-css-extract-plugin";


export function buildPlugins({path}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    // массив плагинов для подключения например html
    new HTMLWebpackPlugin({
      template: path.html,
    }),
    new webpack.ProgressPlugin(), // плаги для отслежевания проггресса сборки,
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    })
  ];
}
