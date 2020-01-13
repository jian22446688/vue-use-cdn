/*
 * @Description: 文件及简介
 * @Author: Cary
 * @Date: 2020-01-11 10:34:19
 * @FilePath: \excel-to-jsonf:\vue-project\vue-test\src\main.js
 */
// import Vue from 'vue'
import App from './App.vue'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ELEMENTUI)

new Vue({
  render: h => h(App),
}).$mount('#app')
