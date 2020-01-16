/*
 * @Description:  Vue CLI 4 配置
 * @Author: Cary
 * @Date: 2019-05-06 14:10:55
 */

'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: process.env.NODE_ENV === 'development',
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    },
    // 排除打包的库 externals
    externals: {
      'element-ui': 'ELEMENTUI',
      'Vue': 'Vue',
      // 'axios': 'axios',
      // 'vue-router':'VueRouter',
      // 'xlsx': 'xlsx',
      // 'echarts': 'echarts'
    }
  }
}
