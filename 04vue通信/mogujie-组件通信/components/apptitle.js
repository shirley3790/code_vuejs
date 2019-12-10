let appTitle = {
  template: `<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>id</th>
        <th>姓名</th>
        <th>工资</th>
        <th>操作</th>
      </tr>
    </thead>
    <tbody>
        <item v-for="(item, index) in emplist" 
        :item="item" 
        :key="item.id" 
        :removeitem="removeitem"
        :index="index"
        ></item>
    </tbody>
  </table>
</div>`,
  props: ['emplist', 'removeitem'],
  components: {
    item
  }

}