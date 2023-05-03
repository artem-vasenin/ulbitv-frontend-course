import webpack from "webpack";
import HTMLPlugin from "html-webpack-plugin";

import { BuildPaths } from './types/config';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export const buildPlugins = ({ html }: BuildPaths): webpack.WebpackPluginInstance[] => ([
  new HTMLPlugin({
    template: html,
  }),
  new webpack.ProgressPlugin(),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:8].css',
    chunkFilename: 'css/[name].[contenthash:8].css',
  }),
]);
