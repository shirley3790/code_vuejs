<template>
  <div class="container">
    <ul class="nav nav-tabs">
      <li class="nav-item" @click="change(index)" v-for="(item,index) in tabs" :key="item">
        <a :class="{active : index== currenindex}" class="nav-link" href="#">{{ item }}</a>
      </li>
    </ul>
    <div>
      <!-- 动态组件 -->
      <keep-alive :include="/News|Keji/">
        <component :is="currentComponent"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
// 1.引入子组件
import News from "./News.vue";
import Tiyu from "./Tiyu.vue";
import Yule from "./Yule.vue";
import Keji from "./Keji.vue"; //柯基

export default {
  data: function() {
    return {
      tabs: ["新闻", "科技", "娱乐", "体育"],
      componentsArr: ["News", "Keji", "Yule", "Tiyu"],
      currentComponent: "News",
      currenindex: 0
    };
  },
  //2.加到vue里面的components
  components: {
    News,
    Tiyu,
    Yule,
    Keji
  },
  methods: {
    change(index) {
      this.currenindex = index;
      this.currentComponent = this.componentsArr[index];
    }
  }
};
</script>