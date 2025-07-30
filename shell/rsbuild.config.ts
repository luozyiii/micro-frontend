import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

const isProduction = process.env.NODE_ENV === 'production';
const isGitHubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3000,
  },
  html: {
    title: 'Nexus Frontend Hub',
    meta: {
      description: 'A cutting-edge micro-frontend platform powered by Module Federation',
      keywords: 'micro-frontend,module-federation,react,typescript,nexus',
    },
  },
  output: {
    // GitHub Pages 部署配置
    ...(isProduction && {
      assetPrefix: '/micro-frontend/',
    }),
  },
});
