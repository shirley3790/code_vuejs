let app = {
    template: `<div>
    <!-- alt+上键  向上移动，+下键 向下移动一步 -->
    <!--头部导航区域-->
    <app-header></app-header>

    <!--核心区域:分左右两边-->
    <div class="container-fluid">
      <div class="row">

        <!--左边菜单栏区域-->
        <app-news></app-news>

        <!--右边主页面区域: 分上下两个区域-->
        <app-main></app-main>
      </div>
    </div></div>`,
    components: {
        // 'app-header': appHeader,
        // appHeader: appHeader
        appHeader,
        appNews,
        appMain
    }
}