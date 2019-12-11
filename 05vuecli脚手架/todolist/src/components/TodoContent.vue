<template>
  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">
            <input v-model="checkall" type="checkbox" name id />
            全选
          </th>
          <th scope="col">#</th>
          <th scope="col">待办事项</th>
          <th scope="col">预计完成事件</th>
          <th scope="col">是否完成</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody>
        <TodoItem
          :change="change"
          :remove="remove"
          v-for="(item, index) in tasklist"
          :key="item.id"
          :item="item"
          :index="index"
          :select="select"
        ></TodoItem>
      </tbody>
    </table>
  </div>
</template>
<script>
import TodoItem from "./TodoItem";

export default {
  props: ["tasklist", "remove", "change", "select"],
  computed: {
    checkall: {
      get() {
        //每一项都为真才为真,全部为真就是勾选完了，再全选
        let istrue = false;
        if (this.tasklist.length) {
          //有数据，就判断任务是否都勾选
          istrue = this.tasklist.every(item => item.isSelected);
        }
        // console.log(istrue);
        return istrue;
      },

      set(val) {
        //v-m 视图->数据
        // console.log(val);
        //全选控制下面所有
        this.tasklist.forEach(item => {
          item.isSelected = val;
        });
      }
    }
  },
  components: {
    TodoItem
  }
};
</script>