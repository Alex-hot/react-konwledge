/*
 * @Author: ALex
 * @Date: 2021-08-19 11:49:23
 * @LastEditTime: 2021-08-19 14:12:07
 * @LastEditors: Please set LastEditors
 * @Description: 基于customize和react-app-rewired的定制化配置文件
 * @FilePath: /react-konwledge/config-overrides.js
 */

//从customize-cra引入一些相关的方法
const { override,
    addLessLoader,
    fixBabelImports,
    addDecoratorsLegacy
} = require('customize-cra')

const modifyVars = require('./lessVars')
module.exports = override(
    addDecoratorsLegacy(),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars
    }),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    })
)