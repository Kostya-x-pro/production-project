import path from 'path';  
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import { BuildOptions } from './types/config';


export function buildPluginststs({path}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    // массив плагинов для подключения например html
    new HTMLWebpackPlugin({
      template: path.html,
    }),
    new webpack.ProgressPlugin(), // плаги для отслежевания проггресса сборки
  ];
}
