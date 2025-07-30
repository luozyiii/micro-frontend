# 🚀 GitHub Pages 部署指南

## 快速部署

### 1. 推送代码到 GitHub

```bash
git add .
git commit -m "feat: 配置 GitHub Pages 部署"
git push origin main
```

### 2. 启用 GitHub Pages

1. 进入 GitHub 仓库设置页面
2. 找到 "Pages" 选项
3. 在 "Source" 中选择 "GitHub Actions"
4. 保存设置

### 3. 自动部署

推送代码后，GitHub Actions 会自动构建和部署微前端应用。

## 访问地址

部署完成后访问：
```
https://your-username.github.io/your-repo-name/
```

## 本地测试

```bash
# 构建应用
cd shell
pnpm build

# 预览构建结果
pnpm preview
```

## 说明

- 部署的是 Shell 主应用，包含完整的微前端演示
- 自动构建 UI Kit 和 Shell 应用
- 支持响应式设计，适配各种设备
- 包含计数器和待办事项功能演示
