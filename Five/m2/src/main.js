// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// var App = require('.App')     等同于上一行

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data:{
        items:[
          {
            label:'apple'
          },
          {
            label:'banana'
          }
        ]
  },
  // template: '<App/>',
  // components: { App }//注册一个APP的组件 可以在html中使用<App></App>
})
