---
layout: ../layout/http.layout.astro
---

## js 测试工具

| 测试工具             | 说明                           |
| -------------------- | ------------------------------ |
| 断言库               | 用于 nodejs 的断言             |
| 测试框架             | 用于测试 expect, describe, ... |
| 运行器               | 提供浏览器等环境               |
| sinon 间谍/存根/模拟 | 测试辅助库                     |
| 测试覆盖率           | istanbul                       |

- nodejs 开始支持原生测试
- mocha.js 就是不需要配置文件（直接使用 mocha 命令运行）
- jasmine 行为驱动 js (jasmine.json 配置文件)
- jest （jest.config.js）
- vitest (基于 vite 的测试框架)
- karma （配置文件：karma.conf.js, 不是测试框架，不是断言库）
- Cypress 可用于 端到端和主流框架的组件测试
- chai 断言库
- ava 与 mocha 差不多

测试运行器： mocha/jest/vitest/ava/Cypress
断言：chai 专业断言库/jest 内置断言库/...

### 测试类型

- TDD/BDD
- 接口测试 http 请求用 supertest

### 测试规范

### 测试框架土建

- jest/vite 环境推荐 vitest
- mocha + chai + istanbul

## rust

rust 语言本身支持测试
