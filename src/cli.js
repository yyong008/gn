#! /usr/bin/env node

import { Command } from 'commander'

import start from './start.js'

const program = new Command()

program
  .description('create a new project')
  .option('-n, --name <name>', 'name of the new project')
  .option('-m', '--esm', true)
  .option('-t, --typescript', 'typescript support', false)
  .option('-g, --git', 'git support', true)
  .action(async function (options) {
    await start(options)
  })

program.parse(process.argv)
