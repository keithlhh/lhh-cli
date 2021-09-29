#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');
console.log('lhh', process.env, pkg)

program
    .version(pkg.version)
    .description('启动 kdzs-cli')
    .option('dev', '测试环境打包')
    .option('build_p64', 'p64环境打包')
    .option('build', '正式环境打包')
    .option('start', '启动开发')
    .option('start_p64', '启动开发')
    .option('init', '初始化项目配置文件')
    .option('create', '创建项目')
    .parse(process.argv);
