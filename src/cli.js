#! /usr/bin/env node

import { Command } from 'commander'

import start from './start.js'
import create from './create.js'

const program = new Command()

program
  .description('create a new node.js project')
  .option('-n, --name <name>', 'name of the new project')
  .option('-m, --esm', 'use es module', true)
  .option('-t, --typescript', 'typescript support', false)
  .option('-g, --git', 'git support', false)
  .action(async function (options) {
    await start(options)
  })

program
  .command('create')
  .description('create')
  .option('--rollup', 'create a rollup config and install deps')
  .option('-c, --component', 'create a component react vue and other')
  .option('--webpack', 'create a webpack config and install deps')
  .option('--nodemon', 'create a nodemon config and install deps')
  .action(async function (options) {
    await create(options)
  })

program.parse(process.argv)
