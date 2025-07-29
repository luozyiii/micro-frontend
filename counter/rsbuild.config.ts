import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3001,
  },
  html: {
    title: 'Counter Application',
    meta: {
      description: 'A simple counter application with persistent state',
    },
  },
  resolve: {
    alias: {
      'ui-kit': '../ui-kit/src',
    },
  },
});
