#! /usr/bin/env node

import { Command } from 'commander'

import start from './start.js'

const program = new Command()

program
  .description('create a new project')
  .option('-n, --name <name>', 'name of the new project')
  .option('-m, --esm', 'use es module', true)
  .option('-t, --typescript', 'typescript support', false)
  .option('-g, --git', 'git support', true)
  .action(async function (options) {
    await start(options)
  })

program
  .command('create')
  .description('create')
  .option('--rollup', 'create a rollup config and install deps')
  .option('-c, --component', 'create a component react vue and other')
  .options('--webpack')
  .action(async function (options) {
    console.log('rollup', options)
  })

program.parse(process.argv)
