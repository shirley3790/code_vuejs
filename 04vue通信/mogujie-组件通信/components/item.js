let item = {
  template: `<tr>
  <td>{{ item.id }}</td>
  <td>{{ item.name }}</td>
  <td>{{ item.salary }}</td>
  <td>
    <a @click="remove()">删除</a>
  </td>
</tr>`,
  props: ['item', 'removeitem', 'index'],
  methods: {
    remove() {
      let istrue = confirm(`您确定要开掉${this.item.name}吗？`);
      if (istrue)
        this.removeitem(this.index);

    }
  }

}