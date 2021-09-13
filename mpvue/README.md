# mpvue-book

> mpvue 的技术实现小程序

请确保信息填写准确无误，是否确认提交？
确认是否执行此操作？
确认是否拒绝？
Object.assign(this.$data, this.$options.data());

3c7bda96d2f193980442213eaaef085cb1f7c003

## Build Setup

```bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

通过物理卡号去判断，
移动卡号开头：
"46000"
"46002"
"46004"
"46007"
"46008"
电信卡号卡头：
"46003"
"46005"
"46011"
没有做联通的 nb，判断不了。
