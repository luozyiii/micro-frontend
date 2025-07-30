import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import moduleFederationConfig from './module-federation.config';

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
  plugins: [pluginReact(), pluginModuleFederation(moduleFederationConfig)],
  server: {
    port: 3000,
  },
  html: {
    title: '微前端生态平台',
    meta: {
      description: '基于模块联邦的新一代微前端架构生态平台',
      keywords: '微前端,模块联邦,React,TypeScript,生态平台',
    },
  },
  output: {
    // GitHub Pages 部署配置
    ...(isProduction && {
      assetPrefix: '/micro-frontend/',
    }),
  },
});
