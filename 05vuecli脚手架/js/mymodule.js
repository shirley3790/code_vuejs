/*
    作用域：
        * 全局作用域：定义在函数外面  var
        * 局部作用域：定义在函数内部 var
        * 块级作用域：let 不会挂在window
        * 模块作用域:
            * 暴露模块：export
            * 导入模块：import
*/

var aobj = {
    name: '婧婧',
    show: function () {
        console.log('我是' + this.name);
    }
}


//导出show函数
export function show() {
    console.log('show函数');
};

//导出对象
export { aobj };

//导出一个变量
// let username = '老姚';
// let password = '123456';
export default {
    username: '老姚',
    password: '123456'
};