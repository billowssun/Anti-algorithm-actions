# 反信息茧房计划

介绍信息茧房与个性化推荐机制的科普网站，按应用分类整理关闭推荐的操作路径。

## 页面内容

- 信息茧房与推荐算法的科普说明。
- 社交、购物和其他应用的分类筛选。
- 常见 App 关闭个性化推荐的操作指引。
- 适配桌面和手机的页面导航。

页面展示操作指南，不会直接修改其他 App 的设置。各 App 设置入口可能随版本变化，使用时需自行核对。

## 技术栈

React、Vite、Tailwind CSS 与 Lucide 图标，无独立业务后端。

## 本地开发

```bash
npm ci
npm run dev
```

## 检查与构建

```bash
npm run lint
npm run build
npm run preview
```

构建产物在 `dist/`，可发布到静态托管服务。主要内容与 App 操作路径位于 `src/App.jsx`。
