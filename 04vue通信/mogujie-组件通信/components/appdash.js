let appDash = {
  template: `<div>
  <slot name="titledash"></slot>
  <div class="row placeholders">
  
  <div 
  v-for="(item, index) in hobbies"
  :key="item"
   class="col-xs-6 col-sm-3 placeholder">
    <img src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" width="200"
      height="200" class="img-responsive" alt="Generic placeholder thumbnail">
    <h4>{{ item }}</h4>
    <span class="text-muted">
      <a @click="remove(index)">删除</a>
    </span>
  </div>
</div></div>`,
  props: ['hobbies'],
  methods: {
    remove(index) {
      //点击删除的时候，调用remove方法，在里面去触发一个自定义事件removehb，该事件触发了，就会执行removeHobby;
      let istrue = confirm(`您不喜欢${this.hobbies[index]}了吗?`)
      if (istrue)
        this.$emit('removehb', index);
    }
  }

}