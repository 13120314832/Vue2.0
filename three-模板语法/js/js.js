new Vue({
    el:"#app",
    data:{
        mubanyufa:"模板语法Vue.js使用了基于HTML的模板语法，允许开发者声明式地将DOM绑定至底层Vue实例的数据。所有Vue.js的模块都是合法的HTML，所以能被遵循规范的浏览器和HTML解析器解析",
        msg:"在底层的实现上，Vue将模板编译成虚拟DOM渲染函数。结合响应系统，在应用状态改变是，Vue能智能地计算出冲重新渲染组件的最小代价并应用到DOM操作上。",
        rawHtml:"This should be red."
        // dynamicId:color:red
    }
})