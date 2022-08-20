import { getData } from '../../api/drink';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentStore: {
      name: "",
      distance: 0
    },
    headerStyle:  '',
    swiperList: [{
      "imageUri":"../../assets/images/swiper-1.jpeg"
    },{
      "imageUri":"../../assets/images/swiper-2.jpeg"
    },{
      "imageUri":"../../assets/images/swiper-3.jpeg"
    },{
      "imageUri":"../../assets/images/swiper-4.jpeg"
    }],
    goodsList: [],
    currentCategoryIndex: 0,
    sidebarCurrent: 0,
    goodsDialogShow: false,
    selectedGoods: null,
    accessType: '自提',
    needPay: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options:any) {
    console.log(options);
    this.setData({
      currentStore: {
        name: options.currentStoreName,
        distance: options.currentStoreDistance,
      }
    })
    this.makeHeaderStyle();
    this.fetchData();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  switchCurrentStore: () => {
    console.log('跳转选择商店页面')
    wx.navigateBack()
},
  makeHeaderStyle() {
    const { top, bottom, height } = wx.getMenuButtonBoundingClientRect()
    const menuButtonCenterPoint = top + height / 2
    const headerStyle = 'margin-top: calc(' + menuButtonCenterPoint + 'px - 32rpx);'
    this.setData({
      headerStyle
    })
  },
  fetchData() {
    getData().then((res: any) => {
      this.setData({
        goodsList: res
      })
    }
    )
  },
  onSideBarChange(e: any) {
    this.setData({
      currentCategoryIndex: e.detail.index
    })
  },
  onGoodsListChange(e: any) {
    this.setData({
      sidebarCurrent: e.detail.index
    })
  },

  onGoodsSelected(e: any) {
    this.setData({
      goodsDialogShow: true,
      selectedGoods: e.detail
    })
  },
  onAccessTypeChange() {
    if ('自提' === this.data.accessType) {
      this.setData({
        accessType: '外送'
      })
    }else{
      this.setData({
        accessType: '自提'
      })
    }
  },
  addGoods(){
    this.setData({
      needPay: 33,
      goodsDialogShow: false,
    })
  }
})