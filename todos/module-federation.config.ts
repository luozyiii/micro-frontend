import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

export default createModuleFederationConfig({
  name: 'todos',
  filename: 'remoteEntry.js',
  exposes: {
    './TodoList': './src/TodoList.tsx',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
  dts: false, // 禁用 TypeScript 类型生成
});
