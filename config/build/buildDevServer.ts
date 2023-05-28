import { Configuration as DSConfig } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export const buildDevServer = (options: BuildOptions): DSConfig => ({
  port: options.port,
  open: true,
  historyApiFallback: true,
  hot: true,
});
