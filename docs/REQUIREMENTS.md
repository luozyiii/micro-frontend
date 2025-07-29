# 微前端项目需求文档

## 📋 项目概述

构建一个基于 Rsbuild + Module Federation 的微前端学习项目，通过简单的功能演示微前端的核心概念和技术实现。

## 🎯 核心目标

- 学习 Module Federation 的配置和使用
- 理解微前端应用间的通信机制
- 掌握共享依赖的管理策略
- 体验独立开发和集成部署

## 🏗️ 技术要求

### 构建工具

- **Rsbuild**: 作为主要构建工具
- **Module Federation**: 实现微前端架构
- **TypeScript**: 提供类型安全

### 前端技术

- **React 18**: 前端框架
- **React Router**: 路由管理 (仅主应用)
- **CSS Modules**: 样式隔离

### 开发工具

- **热更新**: 开发时实时预览
- **ESLint**: 代码规范
- **Prettier**: 代码格式化

## 📁 应用架构

### 主应用 (shell) - 端口 3000

**职责**: 作为微前端容器，提供统一的导航和布局

**功能需求**:

- 顶部导航栏，包含 Home | Counter | Todos 菜单
- 路由管理，根据路径加载对应的微应用
- 统一的页面布局和样式
- 404 页面处理

**技术实现**:

- 配置为 Module Federation Host
- 消费 counter 和 todos 应用
- 使用 React Router 管理路由
- 提供 Loading 和 Error Boundary

### 计数器应用 (counter) - 端口 3001

**职责**: 演示简单的状态管理和组件共享

**功能需求**:

- 显示当前计数值
- 提供 +1、-1、重置按钮
- 状态持久化到 localStorage
- 使用共享 UI 组件

**技术实现**:

- 配置为 Module Federation Remote
- 暴露 Counter 组件
- 独立的 React 应用，可单独访问
- 使用 ui-kit 中的 Button 组件

### 待办应用 (todos) - 端口 3002

**职责**: 演示列表操作和数据持久化

**功能需求**:

- 添加新的待办事项
- 标记待办为完成/未完成
- 删除待办事项
- 显示统计信息 (总数/完成数)
- 数据持久化到 localStorage

**技术实现**:

- 配置为 Module Federation Remote
- 暴露 TodoList 组件
- 独立的状态管理
- 使用 ui-kit 中的 Input、Button、Card 组件

### 共享组件库 (ui-kit)

**职责**: 提供统一的 UI 组件和设计系统

**组件需求**:

- **Button**: 支持 primary、secondary、danger 样式
- **Input**: 文本输入框，支持 placeholder 和事件处理
- **Card**: 卡片容器，支持标题和内容区域

**技术实现**:

- 独立的 npm 包
- TypeScript 类型定义
- CSS Modules 样式
- 统一的设计 token

## 🔧 配置要求

### Module Federation 配置

**主应用 (shell)**:

```javascript
new ModuleFederationPlugin({
  name: 'shell',
  remotes: {
    counter: 'counter@http://localhost:3001/remoteEntry.js',
    todos: 'todos@http://localhost:3002/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
```

**计数器应用 (counter)**:

```javascript
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
});
```

**待办应用 (todos)**:

```javascript
new ModuleFederationPlugin({
  name: 'todos',
  filename: 'remoteEntry.js',
  exposes: {
    './TodoList': './src/TodoList',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true },
  },
});
```

### 依赖共享策略

- **React/React-DOM**: 单例模式，避免多个版本冲突
- **UI组件库**: 通过 npm 包形式共享
- **工具函数**: 各应用独立实现，避免过度耦合

## 📱 用户体验要求

### 导航体验

- 点击导航菜单能够无缝切换应用
- 支持浏览器前进/后退按钮
- 当前页面在导航中高亮显示

### 加载体验

- 微应用加载时显示 Loading 状态
- 加载失败时显示友好的错误信息
- 支持重试机制

### 响应式设计

- 支持桌面端和移动端访问
- 导航在小屏幕上自适应
- 组件在不同屏幕尺寸下正常显示

## 🧪 功能验收标准

### 基础功能

- [ ] 主应用能够正常启动并显示导航
- [ ] 计数器应用能够独立访问和在主应用中加载
- [ ] 待办应用能够独立访问和在主应用中加载
- [ ] 所有应用支持热更新

### 微前端特性

- [ ] 应用间能够独立开发和部署
- [ ] 共享依赖正确配置，无重复加载
- [ ] 各应用的样式相互隔离
- [ ] 状态管理相互独立

### 用户交互

- [ ] 计数器的所有操作正常工作
- [ ] 待办列表的增删改查功能正常
- [ ] 数据能够持久化到 localStorage
- [ ] UI 组件在各应用中一致显示

### 开发体验

- [ ] 一键启动所有应用
- [ ] TypeScript 类型检查正常
- [ ] 代码格式化和 lint 检查通过
- [ ] 构建产物能够正常部署

## 🚀 部署要求

### 开发环境

- 支持本地开发，各应用独立启动
- 支持热更新和实时预览
- 提供清晰的错误信息和调试支持

### 生产环境

- 各应用能够独立构建和部署
- 支持 CDN 部署
- 构建产物优化 (代码分割、压缩等)

## 📚 文档要求

- README: 项目介绍和快速开始
- 开发指南: 详细的开发流程
- 部署指南: 生产环境部署说明
- 代码注释: 关键配置和复杂逻辑的注释
