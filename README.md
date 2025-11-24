# 铁路隧道智慧照明与监测系统产品展示网页

这是一个基于React的静态网页，用于展示隧道综合量测机器人的产品信息。

## 功能特性

- 🎯 **产品信息展示** - 详细介绍产品特性和技术规格
- 📄 **PDF宣传册查看** - 在线查看产品宣传册PDF文件
- 📱 **响应式设计** - 适配各种设备屏幕
- 🎨 **现代化UI** - 美观的渐变背景和卡片式布局
- ⚡ **高性能** - 优化的React组件和懒加载

## 技术栈

- React 18
- React-PDF (PDF.js)
- CSS3 (渐变、动画、响应式)
- 现代浏览器支持

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm start
```

3. 在浏览器中访问 `http://localhost:3000`

## 项目结构

```
src/
├── components/
│   ├── Header.js          # 页面头部组件
│   ├── Header.css
│   ├── ProductInfo.js     # 产品信息展示组件
│   ├── ProductInfo.css
│   ├── PDFViewer.js       # PDF查看器组件
│   └── PDFViewer.css
├── App.js                 # 主应用组件
├── App.css               # 主应用样式
├── index.js              # 应用入口
└── index.css             # 全局样式

public/
└── （1）隧道综合量测机器人(产品宣传册).pdf  # PDF文件
```

## 主要功能

### 产品信息页面
- 产品介绍和核心特性
- 技术规格参数
- 现代化卡片式布局
- 响应式设计

### PDF查看器
- 在线PDF文件查看
- 页面导航控制
- 缩放功能
- 下载功能
- 错误处理和加载状态

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 注意事项

- 确保PDF文件路径正确
- 建议使用现代浏览器以获得最佳体验
- PDF文件需要放在public目录下才能正常访问
