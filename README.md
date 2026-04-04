# WANG YUYING - Personal Portfolio Website

个人作品集网站，采用现代化的React + Vite技术栈，配合Tailwind CSS实现Linear/Modern设计风格。

## 🎨 设计特色

本项目采用**Linear/Modern**设计系统，特点包括：

- 🌑 **深空配色** - 近黑色背景 (#020203, #050506)，非纯黑色
- 💠 **单一强调色** - Indigo蓝 (#5E6AD2) 作为唯一accent色
- 🔮 **玻璃拟态效果** - backdrop-blur + 半透明背景
- ✨ **环境光照** - 浮动的渐变球体模拟电影级光照
- 🎯 **精确微交互** - 200-300ms动画，expo-out缓动，≤8px移动
- 🏔️ **多层深度** - 3-4层阴影系统营造立体感
- 📐 **64px网格系统** - 精确的栅格布局
- 🎬 **电影级视觉** - "未来终端"+"午夜数字实验室"氛围

## 📁 项目结构

```
personal_web/
├── public/              # 静态资源
├── src/
│   ├── assets/         # 图片、字体等资源文件
│   ├── components/     # 可复用组件
│   │   ├── BackgroundEffects.jsx  # 背景特效（渐变球体、网格、噪点）
│   │   ├── Header.jsx             # 头部导航（支持响应式）
│   │   └── Footer.jsx             # 页脚
│   ├── pages/          # 页面组件
│   │   ├── Home.jsx               # 首页（Hero + 快速链接）
│   │   ├── About.jsx              # 关于页（个人简介 + 技能）
│   │   ├── Projects.jsx           # 作品页（2x2项目网格）
│   │   ├── Contact.jsx            # 联系页（联系方式）
│   │   └── NotFound.jsx           # 404页面
│   ├── layouts/        # 布局组件
│   │   └── MainLayout.jsx         # 主布局（Header + 内容 + Footer）
│   ├── hooks/          # 自定义 Hooks
│   ├── utils/          # 工具函数
│   ├── styles/         # 全局样式
│   │   └── index.css              # Tailwind + 自定义样式
│   ├── App.jsx         # 主应用组件（路由配置）
│   └── main.jsx        # 入口文件
├── index.html          # HTML 模板
├── vite.config.js      # Vite 配置
├── tailwind.config.js  # Tailwind CSS 配置
├── postcss.config.js   # PostCSS 配置
└── package.json        # 项目依赖
```

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

访问 `http://localhost:3000` 查看网站

### 构建生产版本
```bash
npm run build
```

### 预览生产版本
```bash
npm run preview
```

### 代码检查
```bash
npm run lint
```

## 🛠 技术栈

- **框架**: React 18
- **构建工具**: Vite 5
- **路由**: React Router v6
- **样式**: Tailwind CSS 3
- **字体**: Inter (Google Fonts)
- **图标**: Material Symbols Outlined
- **代码规范**: ESLint

## 🎨 设计系统核心元素

### 颜色系统
```javascript
background-deep: #020203      // 最深层背景
background-base: #050506      // 主画布背景
foreground: #EDEDEF           // 主文字（非纯白）
foreground-muted: #8A8F98     // 次级文字
accent: #5E6AD2               // 强调色（Indigo蓝）
```

### 组件特性

#### BackgroundEffects 背景特效
- 径向渐变背景
- 64px网格叠加层
- SVG噪点纹理 (opacity: 0.015)
- 2个浮动渐变球体（900px & 800px，8秒循环动画）

#### Header 导航栏
- 固定顶部，毛玻璃效果 (backdrop-blur)
- 响应式设计（桌面端inline，移动端汉堡菜单）
- 活动状态：底部accent色边框
- Resume按钮带发光效果

#### 卡片系统
- 玻璃拟态：`backdrop-filter: blur(16px)`
- 顶部高光线：`inset 0 1px 0 rgba(255,255,255,0.1)`
- Hover状态：上移4px + 边框变亮 + accent光晕
- 过渡时间：300ms，expo-out缓动

### 页面说明

#### Home 首页
- **Hero区域**: 大标题 + 渐变文字 + 双CTA按钮
- **快速链接**: 2个卡片（View Projects + Contact Me），错位布局
- **Approach区域**: 7/5栅格布局 + 几何线框动画

#### About 关于页
- 居中单列布局（max-width: 800px）
- 几何占位符（WY字母标识）
- 3段自我介绍
- 7个技能标签（pill样式）

#### Projects 作品页
- 2x2网格布局（响应式）
- 4个项目卡片，每个包含：
  - 分类标签
  - 图标占位符（Material Symbols）
  - 标题 + 描述
  - "VIEW CASE STUDY"链接
- Hover: 上移 + 缩放1.02 + accent光晕

#### Contact 联系页
- 居中单列布局（max-width: 700px）
- 几何头像占位符
- 2个联系方式卡片（WeChat + Email）
- 底部引用文字 + 装饰线

## 📱 响应式设计

- **Mobile** (`< 768px`): 单列布局，汉堡菜单
- **Tablet** (`768px - 1024px`): 2列网格
- **Desktop** (`≥ 1024px`): 完整布局，固定导航

## ✨ 交互细节

- **悬停效果**: 所有交互元素 200-300ms 过渡
- **卡片悬停**: translateY(-4px) + scale(1.02) + 边框高亮 + accent光晕
- **按钮悬停**: scale(0.95) + 增强发光
- **导航链接**: 颜色过渡 + 底部边框指示活动状态
- **几何动画**: 圆环脉冲 (3s循环)

## 🔧 自定义配置

### Tailwind 扩展
参考 `tailwind.config.js` 查看完整的颜色系统、字体、动画配置。

### Vite 配置
参考 `vite.config.js` 查看开发服务器设置。

## 📝 待办事项

- [ ] 添加页面过渡动画
- [ ] 实现滚动视差效果
- [ ] 添加项目详情页
- [ ] 集成CMS（内容管理）
- [ ] SEO优化
- [ ] 性能优化（代码分割、懒加载）
- [ ] 添加深色/浅色模式切换（当前仅深色）
- [ ] 国际化支持（中英文切换）

## 📄 许可

© 2024 WANG YUYING. All Rights Reserved.

---

**设计灵感来源**: Linear, Vercel, Raycast
**美学定位**: 电影级极简主义 + 高科技感 + 精确微交互
