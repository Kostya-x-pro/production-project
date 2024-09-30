import webpack from 'webpack';
import { BuildOptions } from './types/config';

import { buildPlugins } from './buildPlugins';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { BuildDevServer } from './buildDevServer';

export function buildWebpackConfig(options: BuildOptions):
webpack.Configuration {
    const { path, mode, isDev } = options;

    return {
        mode,
        entry: path.entry, // входная точка в наше приложение
        // путь куда мы будем ложить наше приложение
        output: {
            filename: '[name].[contenthash].js', // имя в скобках это для минификации файла на выхоже
            path: path.build,
            clean: true, // опция чистки ненужных файлов при сборке
        },
        plugins: buildPlugins(options),
        module: {
            // rules - конфигруция для обработки всех файлов не js
            rules: buildLoaders(options),
        },
        // import Component from 'component/'
        resolve: buildResolvers(options),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? BuildDevServer(options) : undefined,
    };
}
