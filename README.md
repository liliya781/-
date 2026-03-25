# 王者荣耀爱好者静态网页

## 项目简介
这是一个基于 `HTML + CSS + JavaScript` 的静态网页项目，主题为王者荣耀内容展示，包含首页视频、英雄轮播、音乐播放、故事展示和留言区域等模块。

## 功能模块
- 顶部导航与时间显示
- 首页背景视频展示
- 英雄角色信息切换（上一页/下一页）
- 游戏音乐播放区
- 故事图文展示区
- 留言输入区（当前版本为前端展示）

## 技术栈
- HTML5
- CSS3
- JavaScript（原生）

## 目录结构
```text
.
├── index.html
├── CSS/
├── js/
├── image/
├── music/
├── video/
└── fonts/
```

## 运行方式
1. 直接双击 `index.html`，或使用 VS Code Live Server 打开。
2. 建议优先使用 Live Server，避免本地路径/资源缓存问题。

## 运行前注意事项
当前 `index.html` 中有部分绝对路径，上传到 GitHub 后其他人无法直接访问，建议改成相对路径：
- `D:\王者荣耀网页\image\logo.webp` -> `image/logo.webp`
- `D:\王者荣耀网页\music\music1.mp3`（及其他同类）-> `music/music1.mp3`

另外，页面底部引用了 `js/review.js`，但当前目录中没有该文件。如需避免报错，可先移除这行引用或补充该脚本文件。

## 项目亮点
- 通过原生 JS 实现角色数据驱动切换与动画过渡
- 使用多媒体资源（视频/音频/图片）构建完整主题页面
- 模块化拆分 CSS，页面结构清晰

## 后续可优化
- 增加 `review.js`，实现留言持久化（LocalStorage）
- 适配移动端（响应式布局）
- 增加部署链接（GitHub Pages）
