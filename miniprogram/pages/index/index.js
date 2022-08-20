// pages/index/index.ts


Page({
  /**
   * 页面的初始数据
   */
  data: {
    user:{},
    swiperList: [{
      "imageUri":"../../assets/images/swiper-1.jpeg"
    },{
      "imageUri":"../../assets/images/swiper-2.jpeg"
    },{
      "imageUri":"../../assets/images/swiper-3.jpeg"
    },{
      "imageUri":"../../assets/images/swiper-4.jpeg"
    }],
    memberInfo: false,
    nearbyStore: null
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onShow() {
   //获取本地存储的用户信息
   let userInfo = wx.getStorageSync("userInfo");
   //判断用户信息是否存在
   if (userInfo) {
     this.setData({
       user: userInfo
     })
   }
  },
  onLoad: function (options) {
    //获取本地存储的用户信息
    let userInfo = wx.getStorageSync("userInfo");
    //判断用户信息是否存在
    if (userInfo) {
      this.setData({
        user: userInfo
      })
    }
  },
  onMenuCardClick() {
    wx.switchTab({
      url: '/pages/store/index',
    })
  },

  onArticleClick() {
    wx.navigateTo({
      url: '/pages/webview/index?url=https://blog.GnaixEuy.cn',
    })
  },

  gotoLogin() {
    wx.navigateTo({
      url: '/pages/login/index',
    })
  },
})