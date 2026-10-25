# zhaocun · 3D Portfolio

**[查看线上作品集](https://zhaocun-portfolio.netlify.app)**

Zhaocun Sun 的个人作品集。深色紫色视觉、可拖动的 3D 电脑、星球场景、滚动动画、项目详情弹窗和手机布局。内容来自 [GitHub 主页](https://github.com/cosmopolitan033)及公开项目 README。

## 本地运行

使用 Node.js 22.22 或更新版本：

```bash
npm ci --legacy-peer-deps
npm run dev
```

```bash
npm run check-types
npm run build
npm run preview
```

## 修改内容

日常更新集中在 **[`src/content.ts`](src/content.ts)**：

- `name`、`headline`：首页姓名和标题
- `about`、`education`：自我介绍和教育背景
- `focus`：展示方向
- `projects`：作品标题、简介、详情、标签、仓库地址
- `github`、`contact`：个人链接和联系文案

页面布局：`src/portfolio.tsx`；视觉样式：`src/portfolio.css`。项目封面是概念插画，可在 `ProjectArt` 中替换为自己的图片。

## Netlify 部署

当前网址：https://zhaocun-portfolio.netlify.app

当前为已上传构建文件的部署。更新时执行 `npm run build`，将 `dist/` 文件夹拖到 Netlify 的 Deploys 页面即可。也可以在 Netlify 连接本仓库，构建命令为 `npm run build`，发布目录为 `dist`；若安装提示 peer dependency 冲突，设置 `NPM_FLAGS=--legacy-peer-deps`。

网站不需要 API key。联系按钮打开 GitHub；没有未配置的邮件表单或后台服务。

## 校验

已完成 TypeScript 检查、生产构建、3D 资源路径检查、桌面模型显示、项目弹窗、400px 手机导航和排版检查。线上首页、JS/CSS、两个模型及 Credits 页面均通过匿名 HTTP 200 检查。

## 来源与许可

基于 [sanidhyy/3d-portfolio](https://github.com/sanidhyy/3d-portfolio) 改造，原项目采用 MIT 许可；保留 [LICENSE.md](LICENSE.md)。3D 模型分别由 Yolala1232 和 cmzw 创作，采用 CC BY 4.0，完整署名见 [`public/credits.html`](public/credits.html)。

此仓库已移除原模板的个人项目、工作经历、评价、联系方式、邮件服务及自动修改 README 的工作流。
