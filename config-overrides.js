/*
 * @Author: ALex
 * @Date: 2021-08-19 11:49:23
 * @LastEditTime: 2021-08-19 13:07:19
 * @LastEditors: Please set LastEditors
 * @Description: 基于customize和react-app-rewired的定制化配置文件
 * @FilePath: /react-konwledge/config-overrides.js
 */

//从customize-cra引入一些相关的方法
const { override } = require('customize-cra')
module.exports = override()