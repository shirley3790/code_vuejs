(function () {
	'use strict';

	/*
		需求：
			* 列表数据渲染
			* 没有数据隐藏列表
			* 添加任务
			* 删除任务
			* 完成：打钩，控制全选
			* 点击全选
			* 显示：未完成。已完成、条数
			* 清除所有完成项
	*/

	//数据的持久化：local storage来实现：永久存储
	let keepName = 'todoMVC';
	let saveSorage = {
		fetch() {
			//获取本地存储的数据
			// console.log(localStorage.getItem(keepName));
			return localStorage.getItem(keepName);
		},
		save(value) {
			//存储数据到本地存储
			localStorage.setItem(keepName, value);
		}
	}

	//注册一个全局的指令 focus，可以用来获取焦点，做兼容处理
	Vue.directive('focus', {//用的时候记得要加上 v-focus
		inserted: function (el, binding) {
			el.focus();
		},
		update: function (el, binding) {//在双击的时候，已经更新了表单的value值
			el.focus();
		}
	});

	let list = [];
	if (saveSorage.fetch()) {//如果本地存储里面有数据就用本地存储的数据，否则就是空数组
		list = JSON.parse(saveSorage.fetch());
	}

	let vm = new Vue({
		//vue管理对象
		el: '#todoapp',
		//数据
		data: {
			taskList: list,
			msg: '',
			ok: false,
			currentIndex: '', //存储双击选项对应索引
			filterStatus: 'all' //存hash的状态，总共有三种 all 全部  active未完成  compeleted完成
		},
		//计算属性
		computed: {
			allcheck: {
				get() {
					//m->v
					// console.log(666);
					let ok = this.taskList.every(item => item.completed);
					// console.log(ok);
					return ok;
				},
				set(val) {
					// console.log(val);
					this.taskList.forEach(item => item.completed = val);
				}
			},
			uncompleted: {//未完成的数量
				get() {
					let newarr = this.taskList.filter(item => !item.completed);
					return newarr.length;
				}
			},
			completedCount: {//已完成的数量
				get() {

					let newarr = this.taskList.filter(item => item.completed);
					return newarr.length;

				}
			},
			filterList() {
				//get的功能：计算属性如果不设置set，默认只有get方法
				switch (this.filterStatus) {
					case 'all':
						return this.taskList;//如果哈希是all,直接把所有的数据返回
						break;
					case 'active'://未完成的数据
						return this.taskList.filter(item => !item.completed);
						break;
					default:
						return this.taskList.filter(item => item.completed);
						break;
				}
			}
		},
		//方法
		methods: {
			add(ev) {
				//添加任务
				if (this.msg.trim()) {
					let con = {
						id: this.taskList.length + 1,
						content: this.msg,
						completed: false
					}

					//插入数据库
					this.taskList.push(con);

					//清空并聚焦
					// console.log(ev.target);
					this.msg = '';
					ev.target.focus();
				}

			},
			remove(index) {
				//删除某一项
				let istrue = confirm('您确定要删除吗？');
				if (istrue) {
					this.taskList.splice(index, 1);
				}
			},
			removefinish() {
				//清除所有已完成的
				let istrue = confirm('您确定要清空所有完成项吗?')
				if (istrue) {
					this.taskList = this.taskList.filter(item => !item.completed);
				}
			},
			edit(index) {
				//双击进入编辑
				this.currentIndex = index;//当下点击的是哪一项就把对应的index传过来
			},
			cancel() {
				//取消编辑，按下esc后
				this.currentIndex = '';
			},
			saveItem(index, ev) {
				let content = ev.target.value.trim();//回车或失去焦点的时候拿到的最新内容
				if (content) {
					//不为空，把新数据存起来
					this.taskList[index].content = content;//如果不为空，更新对应那行的数据
					//退出编辑状态
					this.currentIndex = '';
				} else {
					//为空，把这行删除
					this.taskList.splice(index, 1);
					//退出编辑状态
					this.currentIndex = '';
				}
			}
		},
		//监听器
		watch: {
			//这种方式监听不到数据内部的修改，所以我们要进行深度监听
			// taskList: function (newval, oldval) {
			// 	console.log('我变了' + newval);
			// }
			taskList: {
				deep: true, // 发现对象内部值的变化, 要在选项参数中指定 deep: true。
				handler: function (newItems, oldItems) {
					//只要数组的数据发生改变，就把新数据存到本地存储
					saveSorage.save(JSON.stringify(newItems));
				}
			}

		}

	});


	//利用window下面的onhashchage事件，检测hash的变化
	window.onhashchange = function () {
		let hash = location.hash;//获取哈希值  #/active  #/completed
		let status = hash.slice(2) || 'all';
		// console.log(status);
		vm.filterStatus = status;//想在点击按钮的时候，检测到最新的哈希，来确定我们的状态，后期我们就可以根据状态来过滤数据
	}

	window.onhashchange();//调用一下
})();
