import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3000,
  },
  html: {
    title: 'Micro Frontend Demo - Shell',
    meta: {
      description:
        'A demonstration of micro-frontend architecture using Module Federation',
    },
  },
});
