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
    title: '微前端演示平台',
    meta: {
      description: '基于 Module Federation 的微前端架构演示平台',
      keywords: '微前端,Module Federation,React,TypeScript',
    },
  },
  output: {
    // GitHub Pages 部署配置
    ...(isProduction && {
      assetPrefix: '/micro-frontend/',
    }),
  },
});
