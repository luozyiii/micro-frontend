# 计数器应用

微前端生态平台中的计数器子应用，演示基本的状态管理和数据持久化功能。

## 功能特性

- 🔢 **计数器功能**: 支持增加、减少和重置操作
- 💾 **数据持久化**: 自动保存到本地存储
- 🎨 **现代 UI**: 扁平化设计风格
- 📱 **响应式**: 适配各种屏幕尺寸

## 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Rsbuild + Module Federation
- **样式**: CSS Modules
- **UI 组件**: 共享 UI Kit
- **状态管理**: React Hooks + localStorage

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器 (端口 3001)
pnpm dev

# 构建生产版本
pnpm build

# 预览生产构建
pnpm preview
```

## 独立访问

- 独立应用: http://localhost:3001
- 集成访问: http://localhost:3000/counter

## 组件导出

该应用通过 Module Federation 导出 `Counter` 组件，可被主应用动态加载。
