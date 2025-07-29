# 微前端演示平台

基于 Rsbuild + Module Federation 的现代化微前端架构演示项目，展示扁平化设计和模块化开发的最佳实践。

## 🎯 项目概述

一个完整的微前端解决方案，包含主应用、子应用和共享组件库，演示了现代微前端架构的核心概念和实现方式。

## 🏗️ 技术栈

- **构建工具**: Rsbuild + Module Federation
- **前端框架**: React 18 + TypeScript
- **样式方案**: CSS Modules
- **状态管理**: React State + localStorage
- **路由管理**: React Router (仅主应用)

## 📁 项目结构

```
module-federation/
├── shell/              # 主应用 (端口 3000)
│   ├── src/
│   │   ├── App.tsx     # 应用入口
│   │   ├── Layout.tsx  # 布局组件
│   │   └── pages/      # 页面组件
│   └── rsbuild.config.ts
├── counter/            # 计数器应用 (端口 3001)
│   ├── src/
│   │   ├── App.tsx     # 计数器应用
│   │   └── Counter.tsx # 计数器组件
│   └── rsbuild.config.ts
├── todos/              # 待办应用 (端口 3002)
│   ├── src/
│   │   ├── App.tsx     # 待办应用
│   │   └── TodoList.tsx# 待办组件
│   └── rsbuild.config.ts
├── ui-kit/             # 共享组件库
│   ├── src/
│   │   ├── Button/     # 按钮组件
│   │   ├── Input/      # 输入框组件
│   │   └── Card/       # 卡片组件
│   └── package.json
└── package.json        # 根配置
```

## 🎨 应用功能

### 🏠 主应用 (Shell)
- **统一导航**: 深色半透明毛玻璃导航栏
- **路由管理**: React Router 集成子应用
- **响应式布局**: 适配桌面和移动设备
- **扁平化设计**: 现代化视觉风格

### 🔢 计数器应用
- **基础操作**: 增加、减少、重置功能
- **数据持久化**: 自动保存到本地存储
- **实时反馈**: 即时显示当前数值

### ✅ 待办事项应用
- **任务管理**: 添加、编辑、删除、完成任务
- **智能过滤**: 全部/待完成/已完成状态筛选
- **数据统计**: 实时统计和进度可视化
- **批量操作**: 清除已完成、清除全部
- **双击编辑**: 直观的任务编辑体验

### 🎨 UI 组件库
- **统一设计系统**: 扁平化风格，4px 圆角
- **多种组件**: Button、Input、Card 等
- **尺寸规范**: sm/md/lg 三种尺寸
- **主题一致**: 橙色主题色 (#f77f00)

## ⚡ 快速开始

### 前置要求

- Node.js >= 16.0.0
- pnpm >= 8.0.0

### 1. 安装 pnpm (如果尚未安装)

```bash
npm install -g pnpm
```

### 2. 克隆项目并安装依赖

```bash
git clone <repository-url>
cd module-federation
pnpm install
```

### 3. 启动开发环境

```bash
# 方式一：使用脚本启动 (推荐)
pnpm run start

# 方式二：手动启动
pnpm run setup  # 构建 UI Kit
pnpm run dev    # 启动所有应用

# 方式三：分别启动
pnpm run dev:shell    # 主应用
pnpm run dev:counter  # 计数器
pnpm run dev:todos    # 待办
pnpm run dev:ui-kit   # UI 组件库
```

### 4. 访问应用

- 🏠 **主应用**: http://localhost:3000
- 🔢 **计数器**: http://localhost:3000/counter (集成) | http://localhost:3001 (独立)
- ✅ **待办事项**: http://localhost:3000/todos (集成) | http://localhost:3002 (独立)
- 🎨 **UI 组件库**: http://localhost:6006 (Storybook)

## 🎓 学习重点

### Module Federation 核心概念

- **Host vs Remote**: 主应用与微应用的关系
- **暴露与消费**: 组件的导出和导入机制
- **依赖共享**: React 等公共库的共享策略

### 微前端最佳实践

- **独立开发**: 各应用独立开发和测试
- **独立部署**: 支持单独部署和更新
- **运行时集成**: 浏览器中动态组合应用
- **技术隔离**: 不同应用可用不同技术栈

## 🚀 核心特性

✅ **零配置启动**: 一键启动所有应用
✅ **热更新支持**: 开发时实时预览
✅ **TypeScript**: 完整的类型支持
✅ **组件共享**: 跨应用复用UI组件
✅ **状态隔离**: 各应用独立的状态管理
✅ **pnpm 工作空间**: 高效的包管理和依赖共享

## 📋 可用脚本

### 开发命令

```bash
pnpm run dev          # 启动所有应用
pnpm run dev:shell    # 启动主应用
pnpm run dev:counter  # 启动计数器应用
pnpm run dev:todos    # 启动待办应用
pnpm run dev:ui-kit   # 启动 UI 组件库开发模式
```

### 构建命令

```bash
pnpm run build        # 构建所有应用
pnpm run build:shell  # 构建主应用
pnpm run build:counter # 构建计数器应用
pnpm run build:todos   # 构建待办应用
pnpm run build:ui-kit  # 构建 UI 组件库
```

### 质量检查

```bash
pnpm run lint         # 运行 ESLint 检查
pnpm run lint:fix     # 自动修复 ESLint 问题
pnpm run type-check   # TypeScript 类型检查
pnpm run format       # 代码格式化
```

### 其他命令

```bash
pnpm run clean        # 清理构建产物
pnpm run setup        # 初始化项目 (安装依赖 + 构建 UI Kit)
pnpm run start        # 快速启动开发环境
```

## ⚙️ 配置文件说明

### 代码质量和格式化

- **`.eslintrc.js`** - ESLint 配置，代码质量检查
- **`.prettierrc`** - Prettier 配置，代码格式化
- **`.editorconfig`** - 编辑器配置，确保团队代码风格一致

### 版本控制

- **`.gitignore`** - Git 忽略文件配置
- **`.gitattributes`** - Git 属性配置，处理换行符和文件类型

### 包管理

- **`pnpm-workspace.yaml`** - pnpm 工作空间配置
- **`.npmrc`** - npm/pnpm 配置
- **`.nvmrc`** - Node.js 版本指定

### 构建工具

- **`tsconfig.json`** - TypeScript 配置
- **`rsbuild.config.ts`** - Rsbuild 构建配置
- **`module-federation.config.ts`** - Module Federation 配置
