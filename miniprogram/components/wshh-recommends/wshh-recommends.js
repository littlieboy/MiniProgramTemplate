// components/wshh-recommends/wshh-recommends.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommends:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickItem(event){
      this.triggerEvent("clickItem",{index:event.currentTarget.dataset.index},{})
    }
  }
})
