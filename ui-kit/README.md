# UI Kit 组件库

微前端项目的共享 UI 组件库，提供统一的设计系统和可复用组件。

## 功能特性

- 🎨 **统一设计**: 扁平化设计风格，现代化视觉体验
- 🧩 **模块化组件**: Button、Input、Card 等基础组件
- 📦 **Module Federation**: 支持跨应用共享
- 🎯 **TypeScript**: 完整的类型定义
- 📱 **响应式**: 适配各种屏幕尺寸
- 🎪 **Storybook**: 组件文档和演示

## 组件列表

- **Button**: 多种变体（primary、secondary、danger）和尺寸（sm、md、lg）
- **Input**: 表单输入组件，支持多种状态和尺寸
- **Card**: 卡片容器组件，支持不同变体和内边距

## 技术栈

- **构建工具**: Rslib + Module Federation
- **框架**: React 18 + TypeScript
- **样式**: CSS Modules + CSS Variables
- **文档**: Storybook
- **打包格式**: ESM、CJS、Module Federation

## 快速开始

```bash
# 安装依赖
pnpm install

# 构建组件库
pnpm build

# 启动 Module Federation 开发服务器
pnpm mf-dev

# 启动 Storybook 文档
pnpm storybook
```

## 访问地址

- **Storybook 文档**: http://localhost:6006
- **Module Federation**: http://localhost:3003

## 使用方式

```tsx
import { Button, Input, Card } from 'ui-kit';

// 使用组件
<Button variant="primary" size="sm">
  点击按钮
</Button>
```
