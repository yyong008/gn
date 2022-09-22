---
layout: ../layout/http.layout.astro
---

## 命令 start

| option           | 说明                                      |
| ---------------- | ----------------------------------------- |
| --name, -n       | 指定项目姓名                              |
| --typescript, -t | 支持 typescript                           |
| --esm            | 使用 es module                            |
| --git, -g        | 初始化项目 git                            |
| --entry          | 创建 src/index.js 入口和 scripts 运行脚本 |

### 创建一个 `命名` 名项目

| 命令                                   | 说明             |
| -------------------------------------- | ---------------- |
| `pnpm gn create --name <your_project>` | 创建一个命名项目 |
| `pnpm gn create -n <your_project>`     | 创建一个命名项目 |

```shell
# npm
npm exec gn create --name <your_project>
npm exec gn create -n <your_project>

# yarn
yarn exec gn create --name <your_project>
yarn exec gn create -n <your_project>

# pnpm
pnpm exec gn create --name <your_project>
pnpm exec gn create -n <your_project>
```

### typescript 支持

| 命令         | 说明                 |
| ------------ | -------------------- |
| --typescript | 添加 typescript 参数 |

注意：创建一个默认的 **_tsconfig.json_** 配置文件

### package.json 使用 es module

注意 es module 与 typescript 使用时候可能存在冲突

```sh
pnpm exec gn create --typescript --name <your_project>
pnpm exec gn create -t -n  <your_project>
```

### 使用 git

| 命令      | 说明          |
| --------- | ------------- |
| --git, -g | 添加 git 参数 |

```sh
pnpm exec gn create --git --typescript --name <your_project>
pnpm exec gn create -g -t -n  <your_project>
```

### 创建 src/index.js 入口文件和运行脚本

| 命令    | 说明          |
| ------- | ------------- |
| --entry | 添加 入口文件 |
