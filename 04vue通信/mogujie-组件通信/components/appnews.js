let appNews = {
  template: `<div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
      <li class="active"><a href="#">删除条数 
      <span v-show="delsNum">({{ delsNum }})</span></a></li>
      <li><a href="#">Reports</a></li>
      <li><a href="#">Analytics</a></li>
      <li><a href="#">Export</a></li>
    </ul>
    <ul class="nav nav-sidebar">
      <li><a href="">Nav item</a></li>
      <li><a href="">Nav item again</a></li>
      <li><a href="">One more nav</a></li>
      <li><a href="">Another nav item</a></li>
      <li><a href="">More navigation</a></li>
    </ul>
    <ul class="nav nav-sidebar">
      <li><a href="">Nav item again</a></li>
      <li><a href="">One more nav</a></li>
      <li><a href="">Another nav item</a></li>
    </ul>
  </div>`,
  data: function () {
    return {
      delsNum: 0
    }
  },
  created() {
    //1、实例化的时候就开始订阅消息
    PubSub.subscribe('getnum', (event, data) => {
      console.log(data);
      console.log(this.delsNum);
      // this.delsNum = this.delsNum + data;
      this.delsNum += data;
    });
  }

}