<template>
  <div class="container">
    <!-- 在这里引入子组件 -->
    {{doc}}
    <TodoForm :tasklist="taskList" :addlist="addList" v-bind:title.sync="doc"></TodoForm>
    <TodoContent :tasklist="taskList" :change="change" :remove="remove" :select="select"></TodoContent>
  </div>
</template>
<script>
import TodoForm from "./TodoForm";
import TodoContent from "./TodoContent";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import Bus from "../bus.js";

export default {
  data: function() {
    return {
      doc: 0,
      taskList: [
        //默认的任务数据
        {
          id: 1,
          msg: "定个小目标，完成一个亿",
          completed: "否", //未完成
          isSelected: false,
          endtime: "2019-12-25"
        }
      ]
    };
  },
  components: {
    TodoForm,
    TodoContent
  },
  methods: {
    addList(con) {
      //父组件，形参
      //添加新的任务

      //非空才插入数据
      this.taskList.push(con); //新任务放在下面
      //清空数据并聚焦
      // this.cons = '';
      //js给节点绑定 节点.focus()  在节点上面绑定属性：autofucus也可以聚焦，但是在一些浏览器会失效 移动端苹果浏览器失效 safari
      // this.$refs.taskele.focus();
    },
    change(index) {
      //完成任务
      this.taskList[index].completed = "是";
    },
    remove(index) {
      //删除任务
      let isok = confirm("您确定要删除吗？");
      if (isok) {
        this.taskList.splice(index, 1);
      }
    },
    select(index) {
      this.taskList[index].isSelected = !this.taskList[index].isSelected;
    }
  },

  mounted() {
    //初始化实例的时候
    //利用bus总线，绑定事件：数据接收方，去子组件触发事件：发送数据方
    Bus.$on("changeitem", this.change);
    Bus.$on("removeitem", this.remove);
    Bus.$on("selectitem", this.select);
  }
};
</script>
