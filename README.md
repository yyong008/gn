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
