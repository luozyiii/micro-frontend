# 开发指南

## 🚀 快速开始

### 环境要求
- Node.js >= 16.0.0
- pnpm

### 项目初始化
```bash
# 克隆项目
git clone <repository-url>
cd module-federation

# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev
```

### 访问应用
- 🏠 主应用: http://localhost:3000
- 🔢 计数器: http://localhost:3001
- ✅ 待办: http://localhost:3002

## 📁 项目结构详解

```
module-federation/
├── package.json              # 根配置，包含所有脚本
├── shell/                    # 主应用
│   ├── package.json
│   ├── rsbuild.config.ts     # Rsbuild + MF 配置
│   ├── src/
│   │   ├── App.tsx           # 应用入口
│   │   ├── Layout.tsx        # 布局组件
│   │   ├── components/       # 通用组件
│   │   │   ├── Navigation.tsx
│   │   │   ├── Loading.tsx
│   │   │   └── ErrorBoundary.tsx
│   │   └── pages/
│   │       ├── Home.tsx
│   │       ├── CounterPage.tsx
│   │       └── TodosPage.tsx
│   └── public/
├── counter/                  # 计数器应用
│   ├── package.json
│   ├── rsbuild.config.ts
│   ├── src/
│   │   ├── App.tsx           # 独立应用入口
│   │   ├── Counter.tsx       # 暴露的组件
│   │   └── hooks/
│   │       └── useCounter.ts # 计数器逻辑
│   └── public/
├── todos/                    # 待办应用
│   ├── package.json
│   ├── rsbuild.config.ts
│   ├── src/
│   │   ├── App.tsx           # 独立应用入口
│   │   ├── TodoList.tsx      # 暴露的组件
│   │   ├── components/
│   │   │   ├── TodoItem.tsx
│   │   │   └── TodoForm.tsx
│   │   └── hooks/
│   │       └── useTodos.ts   # 待办逻辑
│   └── public/
└── ui-kit/                   # 共享组件库
    ├── package.json
    ├── src/
    │   ├── index.ts          # 导出所有组件
    │   ├── Button/
    │   │   ├── Button.tsx
    │   │   ├── Button.module.css
    │   │   └── index.ts
    │   ├── Input/
    │   │   ├── Input.tsx
    │   │   ├── Input.module.css
    │   │   └── index.ts
    │   └── Card/
    │       ├── Card.tsx
    │       ├── Card.module.css
    │       └── index.ts
    └── dist/                 # 构建产物
```

## 🔧 开发脚本

### 根目录脚本
```bash
# 安装所有依赖
npm install

# 启动所有应用
pnpm run dev

# 分别启动应用
pnpm run dev:shell
pnpm run dev:counter
pnpm run dev:todos

# 构建所有应用
pnpm run build

# 构建共享组件库
pnpm run build:ui-kit

# 代码检查
pnpm run lint

# 代码格式化
pnpm run format

# 清理构建产物
pnpm run clean
```

### 各应用脚本
```bash
# 进入具体应用目录
cd shell  # 或 counter, todos

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览构建产物
pnpm run preview

# 类型检查
pnpm run type-check
```

## ⚙️ 配置说明

### Rsbuild 配置 (主应用)
```typescript
// shell/rsbuild.config.ts
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'shell',
          remotes: {
            counter: 'counter@http://localhost:3001/remoteEntry.js',
            todos: 'todos@http://localhost:3002/remoteEntry.js',
          },
          shared: {
            react: { singleton: true },
            'react-dom': { singleton: true },
            'react-router-dom': { singleton: true },
          },
        }),
      ],
    },
  },
  server: {
    port: 3000,
  },
});
```

### Rsbuild 配置 (微应用)
```typescript
// counter/rsbuild.config.ts
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { ModuleFederationPlugin } from '@module-federation/enhanced/rspack';

export default defineConfig({
  plugins: [pluginReact()],
  tools: {
    rspack: {
      plugins: [
        new ModuleFederationPlugin({
          name: 'counter',
          filename: 'remoteEntry.js',
          exposes: {
            './Counter': './src/Counter',
          },
          shared: {
            react: { singleton: true },
            'react-dom': { singleton: true },
          },
        }),
      ],
    },
  },
  server: {
    port: 3001,
  },
});
```

## 🎨 组件开发

### 创建新的共享组件
```bash
# 1. 在 ui-kit/src 下创建组件目录
mkdir ui-kit/src/NewComponent

# 2. 创建组件文件
touch ui-kit/src/NewComponent/NewComponent.tsx
touch ui-kit/src/NewComponent/NewComponent.module.css
touch ui-kit/src/NewComponent/index.ts

# 3. 在 ui-kit/src/index.ts 中导出
export { default as NewComponent } from './NewComponent';

# 4. 构建组件库
pnpm run build:ui-kit
```

### 组件开发规范
```typescript
// 组件模板
import React from 'react';
import styles from './Component.module.css';

interface ComponentProps {
  // 定义 props 类型
}

export const Component: React.FC<ComponentProps> = (props) => {
  return (
    <div className={styles.component}>
      {/* 组件内容 */}
    </div>
  );
};

export default Component;
```

## 🔄 微应用开发

### 创建新的微应用
```bash
# 1. 创建应用目录
mkdir new-app
cd new-app

# 2. 初始化 package.json
npm init -y

# 3. 安装依赖
npm install react react-dom
npm install -D @rsbuild/core @rsbuild/plugin-react @module-federation/enhanced

# 4. 创建 rsbuild.config.ts
# 5. 创建 src/App.tsx 和暴露的组件
# 6. 在主应用中配置 remote
```

### 微应用开发规范
- 每个微应用都应该能够独立运行
- 暴露的组件应该是纯组件，不依赖外部状态
- 使用 TypeScript 定义清晰的 props 接口
- 样式使用 CSS Modules 避免冲突

## 🧪 调试技巧

### 开发者工具
- 使用 React DevTools 调试组件
- 使用 Network 面板查看模块加载
- 使用 Console 查看 Module Federation 日志

### 常见问题排查
```bash
# 1. 端口冲突
lsof -ti:3000 | xargs kill -9

# 2. 依赖版本冲突
npm ls react

# 3. 模块加载失败
# 检查 remoteEntry.js 是否可访问
curl http://localhost:3001/remoteEntry.js

# 4. 清理缓存
rm -rf node_modules/.cache
pnpm run clean
```

### 调试模式
```bash
# 启用详细日志
DEBUG=* pnpm run dev

# 构建分析
pnpm run build -- --analyze
```

## 📦 构建

### 本地构建
```bash
# 构建所有应用
pnpm run build

# 预览构建产物
pnpm run preview
```

## 🔍 最佳实践

### 代码组织
- 保持各应用的独立性
- 共享组件放在 ui-kit 中
- 避免应用间的直接依赖

### 性能优化
- 合理配置 shared 依赖
- 使用 React.lazy 懒加载组件
- 启用代码分割

### 类型安全
- 为暴露的组件定义类型
- 使用 TypeScript 严格模式
- 定期检查类型错误
