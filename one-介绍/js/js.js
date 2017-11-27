//定义名为 todo-item 的新组建
// Vue.component('todo-item',{
//     template:'<li>这是个待办项</li>'
// });
Vue.component('todo-item',{
    //todo-item 组件现在接受一个
    //"prop",类似一个自定义属性
    //整个属性名为todo。
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
})
var app = new Vue({
    el:'#app',
    data:{
        one:'Hello Vue!',
        two:'页面加载于' + new Date().toLocaleString(),
        seen:true,
        todos:[
            {text:'学习 JavaScript'},
            {text:'学习 Vue'},
            {text:'整个牛项目'}
        ],
        fifth:'Hello Vue.js!',
        six:'Hello Vue!',
        seven:[
            {id:0,text:'蔬菜'},
            {id:1,text:'奶酪'},
            {id:0,text:'随便其他什么人吃的东西'}
        ]
    },
    methods:{
        reverseMessage:function () {
            this.fifth = this.fifth.split('').reverse().join('')
        }
    }
})





