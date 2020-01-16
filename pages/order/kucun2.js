// pages/order/kucun2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShowChild:0,
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
          console.log(result.windowHeight)
          $systemHeight = result.windowHeight;
          this.setData({
            systemHeight:$systemHeight,
            showSelectHeight:$systemHeight*0.3,
            showProductHeight:$systemHeight*0.7
          })
        },
      })
  },
  showClassChild:function(e){
    var $mainClass = e.currentTarget.dataset.index;
    this.setData({
      isShowChild:$mainClass
    }) 
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