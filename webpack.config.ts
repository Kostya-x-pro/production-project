import path from 'path';  // 
import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: "development",
  entry: path.resolve(__dirname, 'src', 'index.ts'), // входная точка в наше приложение
  // путь куда мы будем ложить наше приложение
  output: {
    filename: "[name].[contenthash].js", // имя в скобках это для минификации файла на выхоже
    path: path.resolve(__dirname, "build"), 
    clean: true  // опция чистки ненужных файлов при сборке
  },
  plugins: [ // массив плагинов для подключения например html
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.ProgressPlugin(), // плаги для отслежевания проггресса сборки
  ],
  module: {
    // rules - конфигруция для обработки всех файлов не js
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  // resolve - поле для того что бы когда мы импортируем файлы мы не указывали в конце расширение
  // import Component from 'component/'
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}

export default config;