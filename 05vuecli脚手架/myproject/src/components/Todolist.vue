<template>
  <div class="container">
    <!-- 在这里引入子组件 -->
    <TodoForm :tasklist="taskList" :addlist="addList"></TodoForm>
    <TodoContent :tasklist="taskList" :change="change" :remove="remove" :select="select"></TodoContent>
  </div>
</template>
<script>
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import TodoForm from "./TodoForm";
import TodoContent from "./TodoContent";

export default {
  data: function() {
    return {
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
      //添加新的任务

      //非空才插入数据
      this.taskList.push(con); //新任务放在下面
      //清空数据并聚焦
      this.cons = "";
      //js给节点绑定 节点.focus()  在节点上面绑定属性：autofucus也可以聚焦，但是在一些浏览器会失效 移动端苹果浏览器失效 safari
      // this.$refs.taskele.focus();
    },
    change(index) {
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
  }
};
</script>
<style scoped>
</style>