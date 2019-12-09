let appMain = {
  template: `<div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">

    <!--右边上半区域-->
    <h1 class="page-header">Dashboard</h1>
    <app-dash></app-dash>
    <!--右边下半区域-->
    <h2 class="sub-header">Section title</h2>
    <app-title></app-title>
  </div>`,
  components: {
    //注册组件
    appDash,
    appTitle
  }
}