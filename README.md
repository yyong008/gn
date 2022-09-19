# gn

generator a node project

## 支持

- esm/cjs
- typescript

## 使用

```sh
npm link

# npm
npx gn -n your-project
npx gn --name your-project


# pnpm
yarn exec gn -n your-project
yarn exec gn --name your-project

# pnpm
pnpm exec gn -n your-project
pnpm exec gn --name your-project
```

## create 命令

``sh

# pnpm

pnpm exec gn create --rollup # 创建 rollup 配置文件

## TODOs

- [ ] 添加 nodemon 为 nodejs
- [ ] http-packet add cli
- [ ] 增加日志
- [ ] 增加 release
- [ ] 增加发 npm 包的流程
- [ ] vscode 调试前端项目配置文件、rust 调试配置文件
- [ ] 添加一个 logo 用于标识
- [ ] 文件创建之前有一个清单 mainfest
- [ ] 需要一个组件用于 npm/yarn/pnpm 安装提示（包含切换）
- [ ] 增加对各种测试工具快速开始化

清单：

```json
{
  // 挂在一个 json 对象，比较大
  "git": true,
  "npmPackageManager": "pnpm"
}
```
