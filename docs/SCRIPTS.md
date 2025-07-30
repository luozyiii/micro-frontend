# 📋 项目脚本说明

## 🚀 启动命令

### `npm run start` (推荐首次使用)
完整的启动流程，包含环境检查和准备：
- ✅ 检查 pnpm 是否安装
- 📦 自动安装依赖（如果需要）
- 🏗️ 构建 UI Kit（必需）
- 🚀 启动所有应用

```bash
npm run start
```

### `npm run dev` (快速启动)
直接启动所有应用（假设环境已准备好）：
- 🏗️ 启动 UI Kit 开发服务器
- 🔢 启动 Counter 应用
- ✅ 启动 Todos 应用  
- 🏠 启动 Shell 主应用

```bash
npm run dev
```

## 🔧 单独启动

如果你只想启动特定应用：

```bash
# 只启动主应用
npm run dev:shell

# 只启动计数器应用
npm run dev:counter

# 只启动待办事项应用
npm run dev:todos

# 只启动 UI Kit 开发服务器
npm run dev:ui-kit
```

## 🏗️ 构建命令

### 构建所有应用
```bash
npm run build
```

### 单独构建
```bash
npm run build:shell      # 构建主应用
npm run build:counter    # 构建计数器应用
npm run build:todos      # 构建待办事项应用
npm run build:ui-kit     # 构建 UI Kit
```

## 👀 预览命令

构建后预览应用：

```bash
npm run preview          # 预览所有应用
npm run preview:shell    # 预览主应用
npm run preview:counter  # 预览计数器应用
npm run preview:todos    # 预览待办事项应用
```

## 🧹 清理命令

```bash
npm run clean            # 清理所有应用的构建产物和缓存
npm run clean:shell      # 清理主应用
npm run clean:counter    # 清理计数器应用
npm run clean:todos      # 清理待办事项应用
npm run clean:ui-kit     # 清理 UI Kit
```

## 🔍 代码质量

### 代码检查
```bash
npm run lint             # 检查所有应用
npm run lint:fix         # 自动修复所有应用的代码问题
```

### 类型检查
```bash
npm run type-check       # TypeScript 类型检查
```

### 代码格式化
```bash
npm run format           # 格式化所有代码文件
```

## 🛠️ 工具命令

### 环境准备
```bash
npm run setup            # 安装依赖并构建 UI Kit
```

## 💡 使用建议

1. **首次使用**: 运行 `npm run start`
2. **日常开发**: 运行 `npm run dev`
3. **单应用开发**: 使用对应的 `dev:xxx` 命令
4. **代码提交前**: 运行 `npm run lint:fix` 和 `npm run type-check`

## 🌐 访问地址

启动后可通过以下地址访问：

- **主应用**: http://localhost:3000
- **计数器应用**: http://localhost:3001 (独立访问)
- **待办事项应用**: http://localhost:3002 (独立访问)
- **UI Kit Storybook**: http://localhost:6006

## ⚠️ 注意事项

- UI Kit 必须先构建才能被其他应用使用
- 如果遇到依赖问题，可以运行 `npm run clean` 后重新安装
- 确保所有端口（3000、3001、3002、6006）没有被其他应用占用
