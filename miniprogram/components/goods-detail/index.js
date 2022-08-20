// components/goods-detail/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    goods: {
      type: Object,
      value: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    selectedMilk: 0,
    selectedTemperature: '',
    temperatureList:['正常冰','去冰','常温','热'],
    selectedSweetness:'',
    sweetnessList:['正常甜','七分糖','少糖','无糖']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onMilkSelected(options) {
      this.setData({
        selectedMilk: options.currentTarget.dataset.index
      })
    },
    onTemperatureSelected(options) {
      console.log(options.currentTarget.dataset.selected);
      this.setData({
        selectedTemperature: options.currentTarget.dataset.selected
      })
    },
    onSweetnessSelected(options){
      console.log(options.currentTarget.dataset.selected);
      this.setData({
        selectedSweetness: options.currentTarget.dataset.selected
      })
    },
    add2ShoppingCart(options){
      console.log(options.currentTarget.dataset.goods);
      this.triggerEvent('on-addGoods', options.currentTarget.dataset.goods)
      console.log('加入购物车模块');
    }
  },

})
