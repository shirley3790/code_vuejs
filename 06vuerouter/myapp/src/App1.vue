<template>
  <div id="app">
    <Tab />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Tab from "./components/Tab.vue";

export default {
  name: "app",
  components: {
    Tab
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
