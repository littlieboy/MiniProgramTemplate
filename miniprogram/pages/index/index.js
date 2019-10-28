//index.js
const app = getApp()
// const fs = require('fs')
const movieClass = ['BA10TA81wangning', 'BA8E6OEOwangning', 'BAI67OGGwangning']
import request from '../../service/network.js';
Page({
  data: {
    banner: [
      "/assets/banner/1.jpg",
      "/assets/banner/2.jpg",
      "/assets/banner/3.jpg",
    ],
    tables: [
      '流行',
      '新款',
      '经典'
    ],
    recommends: [{
        url: "/assets/recommends/c01.png",
        title: '十点抢卷'
      },
      {
        url: "/assets/recommends/c02.png",
        title: '好物特卖'
      },
      {
        url: "/assets/recommends/c03.png",
        title: '内购福利'
      },
      {
        url: "/assets/recommends/c04.png",
        title: '秋季上新'
      }
    ],
   
    isFixed: false,
    tabScrollTop: 0
  },

  onLoad: function() {
    request({
      url: 'http://123.207.32.32:8000/home/multidata',
    }).then(res => {
      // console.log(res)
    })
    var event = {
      detail: {
        index: 0
      }
    };
    this.clickItem(event)
  },
  onShow() {

  },

  clickItem(event) {
    var index = event.detail.index
    var url = movieClass[index]
    wx.request({
      url: "https://3g.163.com/touch/reconstruct/article/list/" + url + "/0-20.html",
      success: res => {
        var len = res.data.length;
        this.setData({
          goodsItem: JSON.parse(res.data.substring(29, len - 2))
        })
        // console.log(this.data.goodsItem)
      }
    })
  },
  recommendClickItem(event) {
    console.log(event.detail.index);
  },

  // 图片加载完成后，获得组件距离顶部的位置
  imageReady() {
    wx.createSelectorQuery().select('#tab-control').boundingClientRect(res => {
      this.setData({
        tabScrollTop: res.top
      })
    }).exec();
  },

  // 页面滚动事件
  onPageScroll(options) {

    const scrollTop = options.scrollTop;
    const flag = scrollTop >= this.data.tabScrollTop;
    if(flag != this.data.isFixed){
      this.setData({
        isFixed:flag
      })
    }

    // const TOP_DISTANCE = 1000 
    // 在 data 中设置  showBackTop: false,
    // const flagBack = scrollTop >= TOP_DISTANCE;
    // if (flagBack != this.data.showBackTop) {
    //   this.setData({
    //     showBackTop: flagBack
    //   })
    // }
  }
})