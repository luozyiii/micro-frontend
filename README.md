# 微前端学习项目

基于 Rsbuild + Module Federation 的微前端架构演示

## 🎯 项目目标

通过简单的示例学习微前端核心概念，专注技术实现而非复杂业务

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

## 🎨 功能演示

### 主应用 (shell)

- 🧭 **导航菜单**: Home | Counter | Todos
- � **应用容器**: 动态加载微前端应用
- 🎨 **统一布局**: 头部导航 + 内容区域

### 计数器应用 (counter)

- 🔢 **数字显示**: 当前计数值
- ➕ **增加按钮**: +1 操作
- ➖ **减少按钮**: -1 操作
- 🔄 **重置按钮**: 归零操作
- 💾 **状态持久化**: localStorage 存储

### 待办应用 (todos)

- ✏️ **添加待办**: 输入新任务
- ✅ **标记完成**: 切换完成状态
- 🗑️ **删除任务**: 移除待办项
- 📊 **统计信息**: 总数/完成数显示
- 💾 **本地存储**: 数据持久化

### 共享组件库 (ui-kit)

- 🎨 **Button**: 主要/次要/危险样式
- 📝 **Input**: 文本输入框
- 🃏 **Card**: 卡片容器
- 🎭 **统一设计**: 一致的视觉风格

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
- 🔢 **计数器**: http://localhost:3001 (独立访问)
- ✅ **待办**: http://localhost:3002 (独立访问)

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
