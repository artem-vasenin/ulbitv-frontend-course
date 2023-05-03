import webpack from 'webpack';

import { BuildOptions } from './types/config';
import { buildPlugins } from './buildPlugind';
import { buildLoaders } from './buildLoaders';
import { buildResolvers } from './buildResolvers';
import { buildDevServer } from './buildDevServer';

export const buildWebpackConfig = ({paths, mode, port, isDev}: BuildOptions): webpack.Configuration => ({
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
  devtool: isDev ? 'inline-source-map' : undefined,
  devServer: isDev ? buildDevServer(port) : undefined,
});
