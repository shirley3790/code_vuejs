let appMain = {
  template: `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

    <!--右边上半区域-->
    <app-dash :hobbies="hobbies" @removehb="removeHobby">
      <h1 class="page-header" slot="titledash">{{ keyword }}</h1>
    </app-dash>
    <!--右边下半区域-->
    <h2 class="sub-header">Section title</h2>
    <app-title :emplist="empList" :removeitem="removeItem"></app-title>
  </div>`,
  data: function () {
    /*
       props父子组件通信步骤：
          1.在父组件准备好数据hobbies
          2.在父组件里面，找到子组件的标签，绑定属性，属性值就是上面的数据hobbies
          3.去到子组件，用props接收数据写的是属性名，渲染数据
        
      自定义事件实现子传父数据通信：
        1.在父组件，写好一个方法 removeHobby
        2.在父组件里面，找到子组件的标签，绑定自定义事件 removehb，调用上面的方法removeHobby
        3.去到子组件，调用一个方法去触发自定义事件  vm.$emit('removehb',参数)

      插槽的运用：简单的数据通信，父组件向子组件传递数据：标签+内容
        1.子组件，定义一个插槽，表好名字 
        2.父组件，找到子组件的标签，在里面写好标签和内容，写好指令或名字就可以向子组件的插槽发布内容。
    */
    return {
      hobbies: ['王者', '魂斗罗', '雪人兄弟', '超级玛丽'], //准备用来渲染到appdash组件里面
      empList: [
        { id: 1, name: '马云', salary: 80001 },
        { id: 2, name: '东哥', salary: 80002 },
        { id: 3, name: '小马哥', salary: 80003 },
        { id: 4, name: '罗老师', salary: 80004 }
      ],
      keyword: '仪表盘'
    }
  },
  components: {
    //注册组件
    appDash,
    appTitle
  },
  //方法
  methods: {
    //谁的数据谁管理
    removeItem(index) {
      //删除员工
      this.empList.splice(index, 1);
    },
    removeHobby(index) {
      //删除爱好
      this.hobbies.splice(index, 1);
      //发布消息
      PubSub.publish('getnum', 1);
    }
  }
}