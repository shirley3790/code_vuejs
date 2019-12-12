<template>
  <div>
    <h2>待完成事项 todolist</h2>
    <div class="input-group mb-3">
      <input
        type="text"
        v-model.trim="cons"
        ref="keywords"
        @keyup.enter="additem()"
        class="form-control"
        placeholder="要完成的任务"
        autofocus
      />
      <div class="input-group-append">
        <span class="input-group-text" id="basic-addon2">
          <input
            v-model="endtime"
            type="date"
            style="border:0;outline:0;height: 20px;background: transparent;"
          />
        </span>
        <button type="button" class="btn btn-success" @click="additem()">添加</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["addlist", "tasklist"],
  data: function() {
    return {
      cons: "", //输入任务可以获取到
      endtime: ""
    };
  },
  methods: {
    additem() {
      //如果不为空就插入数据
      this.$emit("update:title", 10);
      if (this.cons) {
        let con = {
          id: this.tasklist.length + 1,
          msg: this.cons,
          completed: "否", //未完成
          isSelected: false,
          endtime: this.endtime
        };
        this.addlist(con); //子组件向父组件传数据,实参
        //清空数据并聚焦
        this.cons = "";
        this.$refs.keywords.focus();
      }
    }
  }
};
</script>