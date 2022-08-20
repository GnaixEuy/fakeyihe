import {getData} from '../../api/store';

import QQMapWX from '../../utils/qqmap-wx-jssdk.min.js';
const key = 'F72BZ-UDBL2-3WUUL-C264F-2ESS6-5RBRU'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: [],
    activeTab: 0,
    latitude: 0,
    longitude: 0,
    storeList: [],

    dict: {
      'OPENING': '营业中',
      'CLOSED': '已关闭'
    },
    storeDetailShow: false,
    collapse: false,
    mapKey: key
  },
  computed: {
    // markers(data) {
    //   return data.storeList.map((item, index)=>{
    //     return {
    //       id: index + 1,
    //       key: item._id,
    //       title: item.name,
    //       latitude: item.location.latitude,
    //       longitude: item.location.longitude,
    //       iconPath: '../../assets/images/marker.png',
    //       width: '55rpx', height: '69rpx'
    //     }
    //   })
    // },
  },
  mapContext: null,
  mapSdk: null,

  getStoreInfo() {
    getData().then((res) => {
      this.setData({
        storeList: res
      })
    })
  },

  onLoad(options) {
    let that = this
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude
        const longitude = res.longitude
        console.log(latitude, ' ', longitude);
        that.setData({
          latitude,
          longitude
        })
      }
    })
    this.getStoreInfo()
  },

  popupStoreDetail(e) {
    console.log(e.currentTarget.dataset.store);
    wx.navigateTo({
      url: `/pages/menu/index?currentStoreName=`+e.currentTarget.dataset.store.name+`&currentStoreDistance=`+e.currentTarget.dataset.store.distance
    })
  },

  

})