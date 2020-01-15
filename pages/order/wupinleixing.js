// pages/order/wupinleixing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowChild: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var $systemHeight = 0;
    wx.getSystemInfo({
      complete: (res) => {},
      fail: (res) => {},
      success: (result) => {

        $systemHeight = result.windowHeight;
        this.setData({
          systemHeight: $systemHeight,
          showSelectHeight: $systemHeight * 0.3,
          showProductHeight: $systemHeight * 0.7
        })
      },
    })


    let {
      keys,
      values
    } = {
      keys: ["product1", "product2", "product3"],
      values: ["0", "1", "5"]
    };
    keys.forEach((item, index) => {
      this.setData({
        [item]: values[index]
      })
    });

    console.log(this.data.product3);



    var keyArr = [];
    var valueArr = [];


    // var productList = that.data.dataOrderListSelect;
    // for (var i = 0; i < productList.length; i++) {
    //   var keyName = 'product' + productList.productid;
    //   keyArr.push(keyName);
    //   var valueName = false;
    //   if (productList.sum > 0) {
    //     valueName = true;
    //   }
    //   valueArr.push(valueName);
    // }
    // console.log(valueArr);
    // let {
    //   keys,
    //   values
    // } = {
    //   keys: keyArr,
    //   values: valueArr
    // }
    // keys.forEach((item, index) => {
    //   this.setData({
    //     [item]: values[index]
    //   })
    // });



  },
  showClassChild: function (e) {
    var $mainClass = e.currentTarget.dataset.index;
    this.setData({
      isShowChild: $mainClass
    })
  },
  selectProduct: function (e) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})