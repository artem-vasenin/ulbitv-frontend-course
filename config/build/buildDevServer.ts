import { Configuration as DSConfig } from 'webpack-dev-server';

export const buildDevServer = (port: number): DSConfig => ({
  port,
  open: true, // открывает новое окно браузера при сборке
});
