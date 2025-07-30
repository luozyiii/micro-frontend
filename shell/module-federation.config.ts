import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

const isProduction = process.env.NODE_ENV === 'production';

export default createModuleFederationConfig({
  name: 'shell',
  remotes: isProduction ? {
    // GitHub Pages 部署地址 - 使用 mf- 前缀避免路由冲突
    counter: 'counter@https://luozyiii.github.io/micro-frontend/mf-counter/remoteEntry.js',
    todos: 'todos@https://luozyiii.github.io/micro-frontend/mf-todos/remoteEntry.js',
  } : {
    // 本地开发地址
    counter: 'counter@http://localhost:3001/remoteEntry.js',
    todos: 'todos@http://localhost:3002/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
    'react-router-dom': { singleton: true },
  },
  dts: false, // 禁用 TypeScript 类型生成
});
