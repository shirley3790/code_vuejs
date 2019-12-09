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

	let vm = new Vue({
		el: '#todoapp',
		data: {
			taskList: [
				{
					id: 1, //id
					content: '完成作业', //任务内容
					completed: false //是否完成
				},
				{
					id: 2, //id
					content: '选项卡', //任务内容
					completed: true //是否完成
				},
				{
					id: 3, //id
					content: '购物车', //任务内容
					completed: true //是否完成
				}
			],
			msg: '',
			ok: false

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
			}
		},

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
			}
		}


	});

})();
