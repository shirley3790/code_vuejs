<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <todo-list></todo-list> -->
    <TodoList></TodoList>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import TodoList from "./components/Todolist";
export default {
  name: "app",
  components: {
    // HelloWorld
    TodoList
  }
};
</script>

<style>
</style>
