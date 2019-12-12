<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <hello-world></hello-world> -->
    <!-- <TodoList></TodoList>
    <SearchName :typeText="citys">-->
    <!-- 插槽的引用：父组件向子组件发布消息 -->
    <!-- <template v-slot:headname>查询城市</template>
      <template v-slot:title="obj">查询{{obj.username}}</template>
    </SearchName>
    <SearchName :typeText="html">
      <template v-slot:headname>查询专业</template>
      <template v-slot:title>搜索</template>
    </SearchName>-->

    <!-- 添加动态组件：内置组件 -->
    <input type="button" value="切换组件" @click="next()" />
    <component :is="currentComponent"></component>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import TodoList from "./components/TodoList";
import SearchName from "./components/SearchName";

//准备三个子组件
// let myComponents = [
//   {
//     template: "<div>组件1</div>"
//   },
//   {
//     template: "<div>组件2</div>"
//   },
//   {
//     template: "<div>组件3</div>"
//   }
// ];

let myComponents = ["HelloWorld", "TodoList"];

export default {
  name: "app",
  data: function() {
    return {
      currentindex: 0,
      currentComponent: "HelloWorld",
      citys: [
        "广州",
        "东莞",
        "梅州",
        "湛江",
        "深圳",
        "佛山",
        "长沙",
        "武汉",
        "广西",
        "广东"
      ],
      html: [
        "html",
        "javascript",
        "css",
        "nodejs",
        "php",
        "vuejs",
        "react",
        "mongoDB",
        "mysql",
        "requirejs",
        "jquery",
        "promise",
        "express",
        "ajax"
      ]
    };
  },
  components: {
    //子组件
    HelloWorld,
    TodoList,
    SearchName
  },
  //方法
  methods: {
    next() {
      if (this.currentindex >= myComponents.length - 1) {
        this.currentindex = 0;
      } else {
        this.currentindex++;
      }

      this.currentComponent = myComponents[this.currentindex];
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
