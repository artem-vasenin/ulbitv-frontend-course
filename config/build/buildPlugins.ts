import webpack from "webpack";
import HTMLPlugin from "html-webpack-plugin";

import { BuildOptions } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => ([
  new HTMLPlugin({
    template: options.paths.html,
  }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
]);
