import { createModuleFederationConfig } from '@module-federation/rsbuild-plugin';

const isProduction = process.env.NODE_ENV === 'production';

export default createModuleFederationConfig({
  name: 'shell',
  remotes: isProduction ? {
    // GitHub Pages 部署地址
    counter: 'counter@https://luozyiii.github.io/micro-frontend/counter/remoteEntry.js',
    todos: 'todos@https://luozyiii.github.io/micro-frontend/todos/remoteEntry.js',
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
