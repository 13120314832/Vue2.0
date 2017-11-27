// var vm = new Vue({
//     //选项
// })
//我们的数据对象
var data = {a : 1};
//该对象被加入到一个 Vue 实例中
var vm = new Vue({
    data:data
})

//他们引用相同的对象
vm.a === data.a     //true

//设置属性也会影响到原始数据
vm.a = 2
data.a  //=2
//...反之亦然
data.a = 3
vm.a        //=3


//实例生命周期
new Vue({
    data:{
        a:1
    },
    created:function () {
        //‘this'指向vm实例
        console.log('a is ' + this.a)
    }// "a is 1"
})

