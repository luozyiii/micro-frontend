import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3002,
  },
  html: {
    title: 'Todo Application',
    meta: {
      description: 'A task management application with full CRUD operations',
    },
  },
  output: {
    // GitHub Pages 部署配置
    ...(isProduction && {
      assetPrefix: '/micro-frontend/mf-todos/',
    }),
  },
  resolve: {
    alias: {
      'ui-kit': '../ui-kit/src',
    },
  },
});
