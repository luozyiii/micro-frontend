import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3001,
  },
  html: {
    title: 'Counter Application',
    meta: {
      description: 'A simple counter application with persistent state',
      keywords: 'counter,react,micro-frontend',
    },
  },
  output: {
    // GitHub Pages 部署配置
    ...(isProduction && {
      assetPrefix: '/micro-frontend/mf-counter/',
    }),
  },
  resolve: {
    alias: {
      'ui-kit': '../ui-kit/src',
    },
  },
});
