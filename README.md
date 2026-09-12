# Camio Technology & Trade 网站 V1.0

这是一个无需数据库、无需后台、可直接部署到 GitHub Pages 的三语企业展示网站。

## 1. 文件结构

camio-website-v1/
- index.html       英文首页
- zh/index.html    中文首页
- fr/index.html    法文首页
- css/style.css    全站样式
- js/site.js       产品信息、邮箱、WhatsApp等集中配置
- images/          后续放产品图片
- README.md        建站说明

## 2. 发布前必须修改的内容

打开 `js/site.js`：

### 邮箱
把：
`email: "info@kamiotrading.com"`
改成你实际使用的企业邮箱。

### WhatsApp
把：
`whatsapp: ""`
改成完整国际号码，例如：
`whatsapp: "8613812345678"`
不要加 `+`、空格或短横线。

### 产品信息
所有产品卡片都集中在 `SITE.products`：
- en = 英文
- zh = 中文
- fr = 法文

以后新增、删除、修改产品，只需要修改这里，不需要重新设计页面。

## 3. 产品图片

V1.0先使用高级商务视觉占位，不依赖外部图片，所以上传后可以直接运行。

以后添加真实产品照片时：
1. 将图片放入 `images/`
2. 在 `site.js` 的产品数据中增加 image 字段
3. 在 `site.js` 的产品卡片模板中调用图片

建议图片：
- smart-card.jpg
- steel-structure.jpg
- solar-pv.jpg
- industrial-equipment.jpg
- construction-machinery.jpg
- paint-equipment.jpg
- water-filter.jpg

建议统一使用横版 16:10 或 4:3，单张 300KB–1MB 左右。

## 4. GitHub Pages 发布

推荐使用 GitHub Free + Public Repository。

### 第一步：注册 GitHub
打开 https://github.com/
注册账号并验证邮箱。

### 第二步：创建仓库
建议仓库名：
`camio-website`

选择：
- Public
- Add README 可选

### 第三步：上传整个网站文件
进入仓库 → Add file → Upload files
把本文件夹中的所有文件和文件夹一起拖进去。
确认根目录能看到：
`index.html`
`css`
`js`
`zh`
`fr`

不要把 `camio-website-v1` 这个外层文件夹再套一层上传。

### 第四步：打开 GitHub Pages
仓库：
Settings → Pages

Build and deployment：
- Source: Deploy from a branch
- Branch: main
- Folder: / (root)
- Save

GitHub官方说明：入口文件可以是根目录中的 `index.html`；Pages发布后可能需要几分钟生效。

### 第五步：访问网站
通常地址：
`https://你的GitHub用户名.github.io/camio-website/`

如果以后改成用户站点仓库：
`你的GitHub用户名.github.io`
则网站地址会直接变成：
`https://你的GitHub用户名.github.io/`

## 5. 绑定自己的域名

你可以在网站发布成功以后再绑定自己的域名，例如：
`www.kamiotrading.com`

GitHub：
Settings → Pages → Custom domain
填写：
`www.kamiotrading.com`
Save

然后去你的域名DNS服务商添加：
类型：CNAME
主机记录：www
记录值：你的GitHub用户名.github.io

如果希望同时使用根域名 `kamiotrading.com`，再按照GitHub Pages官方说明配置根域名DNS记录。

## 6. 后续修改产品

以后最常见的修改只需要：
1. GitHub → 你的仓库
2. 打开 `js/site.js`
3. 点击编辑
4. 修改产品名称、说明、分类
5. Commit changes
6. 等待网站自动更新

不需要重新购买服务器，也不需要重新建站。

## 7. 建议的长期网站结构

核心业务：
1. Smart Card Design & Manufacturing
2. Steel Structure Buildings
3. Solar PV Power Systems

Selected Projects / Other Businesses：
4. Industrial Equipment & Production Lines
5. Construction Machinery
6. Paint Production Equipment
7. Water Purification Components

这样可以突出核心业务，同时保留已有项目经验，不会让网站看起来像“什么产品都卖”。

## 8. 后续升级

V1.0发布成功后，可以继续增加：
- 产品详情页
- 产品真实图片
- 工程案例 Case Studies
- 下载产品目录 PDF
- 在线询盘表单
- WhatsApp / Email快捷联系
- SEO关键词
- 网站统计
- 新闻 / 项目动态
- 更专业的公司Logo和品牌视觉
- EN / 中文 / FR语言自动识别提示

注意：GitHub Pages本身适合静态企业展示网站。如果以后需要后台登录、在线下单、客户数据库或真正的产品管理后台，则需要增加后端/第三方服务。
