import webpack from "webpack";
import HTMLPlugin from "html-webpack-plugin";

import { BuildPaths } from './types/config';

export const buildPlugins = ({ html }: BuildPaths): webpack.WebpackPluginInstance[] => ([
  new HTMLPlugin({
    template: html,
  }),
  new webpack.ProgressPlugin(),
]);
