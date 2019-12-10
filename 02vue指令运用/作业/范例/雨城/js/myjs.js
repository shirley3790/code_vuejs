
//拖拽滚动条
function roll(outer, inner, type, fn) {
    var box = document.getElementById(outer);
    var bar = document.getElementById(inner);
    if (type == 'y') {//垂直方向
        bar.onmousedown = function (ev) {//运用event事件
            var disY = ev.offsetY;
            document.onmousemove = function (ev) {
                var top = ev.pageY - disY - box.offsetTop;
                var top_Max = box.offsetHeight - bar.offsetHeight;
                if (top <= 0) {
                    top = 0;
                } else if (top >= top_Max) {
                    top = top_Max;
                }

                bar.style.top = top + 'px';
                //获取滚动系数
                var scal = top / top_Max;
                fn(scal);
            }
            document.onmouseup = function () {
                document.onmousemove = null;
            }
        }
    }
    if (type == 'x') {//水平方向
        bar.onmousedown = function (ev) {
            var disX = ev.offsetX;
            document.onmousemove = function (ev) {
                var left = ev.pageX - disX - box.offsetLeft;
                var left_Max = box.offsetWidth - bar.offsetWidth;
                if (left <= 0) {
                    left = 0;
                } else if (left >= left_Max) {
                    left = left_Max;
                }
                bar.style.left = left + 'px';

                //移动系数
                var scal = left / left_Max;
                fn(scal);
            }
            document.onmouseup = function () {
                document.onmousemove = null;
            }
        }
    }
}


//封装滚动方向判断
function scrollPosi(ele, type, fnup, fndown) {
    if (type == 'bind') {
        //绑定滚动事件
        //ele:作用的节点  fnup：向上滚执行的回调  fndown：向下滚执行的回调
        ele.onmousewheel = fn;//针对ie和谷歌
        if (ele.addEventListener) {//火狐
            ele.addEventListener('DOMMouseScroll', fn, false);
        }

        function fn(ev) {
            var ev = ev || window.event;
            var b = true; //判断向上或向下 ： true:向上滚，false:向下滚

            if (ev.wheelDelta) {//ie 谷歌
                b = ev.wheelDelta > 0 ? true : false;//大于0就是向上滚
            } else {//火狐
                b = ev.detail < 0 ? true : false;//小于0是向上滚
            }

            if (b) {//向上滚了：
                // this.style.height = this.offsetHeight - 10 + 'px';
                fnup();
            } else {//向下滚了：
                // this.style.height = this.offsetHeight + 10 + 'px';
                fndown();
            }

            if (ev.preventDefault) {
                ev.preventDefault();
            }
            return false;
        }

        if (document.attachEvent) {
            document.attachEvent('oncontextmenu', function () {
                return false;
            });
        }
        else {
            document.addEventListener('contextmenu', function (ev) {
                ev.preventDefault();
                //return false;
            });
        }
    }
    if (type == 'unbind') {
        //解除绑定
        ele.onmousewheel = null;
        if (ele.addEventListener) {//火狐
            ele.removeEventListener('DOMMouseScroll', fn, false);
        }
    }
}

//时间补零
function toDb(num) {
    if (num < 10) {
        return '0' + num;
    } else {
        return '' + num;
    }
}

//时间转换，秒转换成xx天xx时xx分xx秒
function changTime(num) {
    var date = parseInt(num / 3600 / 24);//天
    var hours = parseInt((num - date * 3600 * 24) / 3600);//时
    var minute = parseInt(num % 3600 / 60);//分
    var second = (num % 60 % 60).toFixed(0);//秒
    return {//通过对象可以一次性返回多个值，这样可以把数据的拼接方式放到外部进行，更为灵活
        day: date,
        hours: hours,
        mins: minute,
        secs: second
    };
}

//封装一个方法：css() jq的方法：2个参数获取样式，3个参数设置样式
function css() {
    if (arguments.length == 2) {
        //获取样式
        var attr = arguments[1];
        if (getComputedStyle(arguments[0], false)) {
            //标准浏览器

            return getComputedStyle(arguments[0], false)[attr];
        } else {
            //ie678
            arguments[0].currentStyle[attr];
        }
    } else if (arguments.length == 3) {
        //设置样式 box.style.border = '1px solid #ccc';
        var attr = arguments[1];
        var val = arguments[2];
        arguments[0].style[attr] = val;
    }
}

//第一个子元素
function firstChild(ele) {//第一个子元素
    if (ele.firstElemntChild) {//标准浏览器
        return ele.firstElemntChild;
    } else {//ie678
        return ele.firstChild;
    }
}

//最后一个子元素
function lastChild(ele) {//最后一个子元素
    if (ele.lastElemntChild) {//标准浏览器
        return ele.lastElemntChild;
    } else {//ie678
        return ele.lastChild;
    }
}

//前一个兄弟元素
function preSibling(ele) {//前一个兄弟元素
    if (ele.previousElementSibling) {//标准浏览器
        return ele.previousElementSibling;
    } else {//ie678
        return ele.previousSibling;
    }
}

//后一个兄弟元素
function nextSibling(ele) {//后一个兄弟元素
    if (ele.nextElementSibling) {//标准浏览器
        return ele.nextElementSibling;
    } else {//ie678
        return ele.nextSibling;
    }
}

//表单验证正则表达式大全 调用时，checkReg.uesrname(uesrname)
var checkReg = {
    email: function (str) {
        /*
			电子邮件
				jinrong.xie@qq.com
				123@qq.com
				x_x@163.com
				x-x@a-r.com.cn
				x.x@laoxie.com
				邮箱用户名必须3-30个字符
		 */
        var reg = /^[\w#$!\-]+@[\w#$!\-]+\.[a-zA-Z]+$/;
        return reg.test(str);
    },
    tel: function (str) {
        /*
        手机号
            * 长度11位
            * 第2位是3-9
        */
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    username: function (str) {
        /*
        验证账号
			* 不能为空，
			* 不能使用特殊字符（数字、字母、下划线、横杠）开头，
			* 必须以字母开头，
			* 长度6-20
        */
        var reg = /^[a-z][\w\-]{5,19}$/;
        return reg.test(str);
    },
    nickname: function (str) {
        //中文
        var reg = /^[\u2E80-\u9FFF]+$/;
        return reg.test(str);
    },
    idCard: function (str) {
        //身份证
        var reg = /^(\d{17}|\d{14})[\dx]$/;
        return reg.test(str);
    },
    password: function (str) {
        /*
			密码  
				长度6-20 
				不能包含空格
		 */
        var reg = /^\w{6,20}$/;
        return reg.test(str);
    },
    birthday: function (str) {
        //出生年月日
        var reg = /^\d{4}([\/\-]?)\d{1,2}\1\d{1,2}$/;
        return reg.test(str);
    },
    realname:function(str){

        //真实姓名是2-6位的汉字组成
        var reg =  /^[\u4e00-\u9fa5][\u4e00-\u9fa5]{1,5}$/;
        return reg.test(str);
    }
}

//事件监听
function bind(ele, type, fn) {
    if (ele.addEventListener) {
        //标准浏览器
        ele.addEventListener(type, fn, false);//事件冒泡：默认
    } else {
        //IE678
        ele.attachEvent('on' + type, fn);
    }
}

//范围内的随机数
function ranNum(min, max) {
    //Math.random() 0-0.99 当随机数等于0的时候，整体最小的时候
    //最大的时候，Math.random() 最大就是1(实际没到1)
    return parseInt(Math.random() * (max - min + 1)) + min;
}

//随机颜色
function ranColor(type) {
    if (type == 16) {
        //返回一个随机颜色：十六进制
        var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
        var str = '#';//拼接颜色
        for (var i = 0; i < 6; i++) {
            var num = parseInt(Math.random() * arr.length);//0-length-1整数
            str += arr[num];
        }
        return str;
    } else if (type == 'rgb') {
        //返回rgb颜色
        var num1 = parseInt(Math.random() * 256);//0-255整数
        var num2 = parseInt(Math.random() * 256);//0-255整数
        var num3 = parseInt(Math.random() * 256);//0-255整数
        var str = `rgb(${num1},${num2},${num3})`;
        return str;
    }
}

//字符串转成对象
function strToObj(str) {//key0=0&key1=1&key2=2
    var arr = str.split('&');//["key0=0", "key1=1", "key2=2"]
    var obj = {};
    arr.forEach(function (item) {
        var arr2 = item.split('=');
        obj[arr2[0]] = arr2[1];
    });
    return obj;
}

//对象转成字符串
function objToStr(obj) { //{name:malin,adr:guangxi}
    var str = '';//key0=0&key1=1&key2=2
    for (var key in obj) {
        str += key + '=' + obj[key] + '&';
    }
    return str.slice(0, -1);
}

//统计字符串中重复字符的数量以及去重
function statistics(str) {
    var newstr = '';
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
        if (newstr.indexOf(str[i]) == -1) {//判断新数组内是否有与旧数组一样的数据
            newstr += str[i];
        }
    }
    console.log(obj);
    console.log(newstr);
}

//随机验证码
function checkCode() {
    //生成随机验证码
    var str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    var str1 = '';
    for (var i = 0; i < 4; i++) {
        var ran = parseInt(Math.random() * str.length);//随机获取字符串的第几个下标
        str1 += str[ran];//获得该下标下的字符串，并进行拼接
    }
    return str1;
}

//获取时间
function getTime() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var date = time.getDate();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var day = time.getDay() + 1;
    return {
        year: year,
        month: month,
        date: date,
        hour: hour,
        min: min,
        sec: sec,
        day: day
    };
}


/*
	运动框架封装：startMove()过渡    jq animate() 因为后期有animate可以用，所以不做要求
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fn) {
    clearInterval(obj.timer);//防止定时器的叠加
    obj.timer = setInterval(() => {
        let isok = false;
        for (let key in json) {
            //1.获取初始值
            let cur = 0;
            if (key == 'opacity') {
                //要改变透明度
                cur = css(obj, key) * 100;//获取透明度扩大100倍方便后期计算
            } else {
                //要的是以px为单位
                cur = parseInt(css(obj, key));
            }
            //2.准备缓冲运动的 步长==距离/比例系数==终点-起点/比例系数
            let speed = (json[key] - cur) / 6;
            //防止晃动
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);

            if (cur != json[key]) {
                //只要有一个属性未到达终点，动画就还不算完成，不能开始下个运动
                isok = false;
            } else {
                isok = true;
            }
            //3.开始运动
            let val = cur + speed;
            if (key == 'opacity') {
                css(obj, key, val / 100);//btn.style.opacity=20/100
            } else {
                //以px为单位
                css(obj, key, val + 'px');
            }

            //4.判断属性是否都已经到达临界点，全部到达了就是运动完成了，如果有下一个运动，继续开始
            if (isok) {
                //真：已经完成
                if (fn) {//fn可选参数
                    fn();
                }
            }
        }
    }, 30);
}

//ajax
function ajax(opt) {
    //默认参数
    let defaultOpt = {
        asyn: true,//默认是异步
        data: '',//默认没有数据传输
        failure: null
    }

    //替补方案
    Object.assign(defaultOpt, opt);//用默认参数

    //创建对象
    let xhr = new XMLHttpRequest();

    //open()设置参数
    if (defaultOpt.type.toLowerCase() == 'get') {
        //get方式发送请求
        if (defaultOpt.data) {
            //判断是否有数据，有就拼接在url后面
            let str = objToStr(defaultOpt.data);
            defaultOpt.url += '?' + str;
        }
        xhr.open('get', defaultOpt.url, defaultOpt.asyn);
        xhr.send(null);
    } else if (defaultOpt.type.toLowerCase() == 'post') {
        //post方式发送请求
        xhr.open('post', defaultOpt.url, defaultOpt.asyn);
        let str = '';
        if (defaultOpt.data) {
            str = objToStr(defaultOpt.data);
        }
        xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");//设置请求头
        xhr.send(str);
    }

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {//完成
            if (xhr.status == 200 || xhr.status == 304) {
                //成功了
                defaultOpt.success(xhr.responseText);//把数据返回
            } else {
                if (defaultOpt.failure) {
                    defaultOpt.failure(xhr.status);//失败的回调：接收http状态码
                }
            }
        }
    }
}

//cookie
//设置/修改
function setCookie(key, val, iday) {
    //key 键名，val 键值， iday 多少天后失效
    let time = new Date();
    let today = time.getDate();//日
    time.setDate(today + iday);
    document.cookie = key + '=' + val + ';expires=' + time + ';path=/';
}

//获取
function getCookie(key) {
    let str = document.cookie;
    // console.log(str);//name=小虎; age=18; adr=广东广州
    let arr = str.split('; ');
    // console.log(arr);
    for (let item of arr) {
        let arr2 = item.split('=');
        if (key == arr2[0]) {
            return arr2[1];
        }
    }
}

//删除cookie
function removeCookie(key) {
    setCookie(key, '', -1);
}
