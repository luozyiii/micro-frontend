import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'uikit',
  exposes: {
    '.': './src/index.tsx',
  },
  shared: {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  },
  dts: false, // 禁用 TypeScript 类型生成
});
