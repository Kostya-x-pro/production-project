import { BuildOptions } from "./types/config";
import webpack from 'webpack';
import path from "path";

import { buildPluginststs } from "./buildPlugins";
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {path, mode} = options

  return {
    mode,
    entry: path.entry, // входная точка в наше приложение
    // путь куда мы будем ложить наше приложение
    output: {
      filename: "[name].[contenthash].js", // имя в скобках это для минификации файла на выхоже
      path: path.build, 
      clean: true  // опция чистки ненужных файлов при сборке
    },
    plugins: buildPluginststs(options),
    module: {
      // rules - конфигруция для обработки всех файлов не js
      rules: buildLoaders(),
    },
    // resolve - поле для того что бы когда мы импортируем файлы мы не указывали в конце расширение
    // import Component from 'component/'
    resolve: buildResolvers(),
  }
}