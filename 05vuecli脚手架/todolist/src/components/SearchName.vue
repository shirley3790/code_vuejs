<template>
  <div class="container">
    <h2>
      <!-- 插槽的应用：这里留一个插槽 -->
      <slot name="headname"></slot>
    </h2>
    <div class="input-group mb-3">
      <!-- 如果想失去焦点再搜索，加上修饰符.lazy -->
      <input type="text" class="form-control" v-model="keyword" placeholder="搜索" autofocus />
      <div class="input-group-append">
        <button type="button" class="btn btn-success">
          <!-- 插槽的应用：这里留一个插槽 -->
          <slot name="title" :msg="fcg"></slot>
        </button>
      </div>
    </div>
    <ul class="list-group">
      <li v-for="(item, idx) in search" :key="item" class="list-group-item">{{ idx +1}} - {{ item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ["typeText"],
  data: function() {
    return {
      keyword: "",
      fcg: "防城港"
    };
  },
  computed: {
    search: {
      get() {
        let arr = this.typeText.filter(item => {
          return item.includes(this.keyword);
        });
        return arr;
      }
    }
  }
};
</script>
