import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugind';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = ({paths, mode, port}: BuildOptions): webpack.Configuration => ({
  mode,
  entry: paths.entry,
  output: {
    filename: '[name].[contenthash].js',
    path: paths.build,
    clean: true,
  },
  plugins: buildPlugins(paths),
  module: {
    rules: buildLoaders(),
  },
  resolve: buildResolvers(),
  devtool: 'inline-source-map',
  devServer: buildDevServer(port),
});
