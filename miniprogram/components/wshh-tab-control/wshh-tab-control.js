// components/wshh-tab-control/wshh-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tables: {
      type: Array,
      value: []
    }
  },
  options: {
    styleIsolation: "shared"

    //apply-shared 影响自定义组件 shared 互相影响 isolated 隔离
  },
  externalClasses: ['titleclass'],
  /**
   * 组件的初始数据
   */
  data: {
    currentindex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabclick: function (event) {
      const index = event.currentTarget.dataset.index;
      this.setData({
        currentindex: index
      })
      this.triggerEvent("clickItem", { index, title: this.properties.tables[index] }, {})
    }
  }
})