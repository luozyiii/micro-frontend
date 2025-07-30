# 微前端生态平台 - 主应用

基于 Module Federation 的微前端架构演示项目的主应用（Shell），负责应用路由、导航和子应用集成。

## 功能特性

- 🚀 **微前端架构**: 使用 Module Federation 动态加载子应用
- 🎨 **统一导航**: 提供全局导航和路由管理
- 📱 **响应式设计**: 支持桌面和移动设备
- 🎯 **扁平化 UI**: 现代化的扁平设计风格

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Rsbuild + Module Federation
- **路由**: React Router v6
- **样式**: CSS Modules
- **UI 组件**: 自定义 UI Kit

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器 (端口 3000)
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 子应用

- **计数器应用** (端口 3001): 简单的计数器功能演示
- **待办事项应用** (端口 3002): 完整的 CRUD 任务管理

## 访问地址

- 主应用: http://localhost:3000
- 计数器: http://localhost:3000/counter
- 待办事项: http://localhost:3000/todos
