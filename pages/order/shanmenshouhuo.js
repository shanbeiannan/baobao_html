// pages/order/shanmenshouhuo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    istrue:false,
    left:'左边1',
    right:'右边4'
  },
  openDialog: function () {
    this.setData({
      istrue: true
    })
  },
  closeDialog: function () {
    this.setData({
      istrue: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const leftArr = ['左边1', '左边2', '左边3', '左边4', '左边5','左边6'];
    const rightArr = ['右边1', '右边2', '右边3','右边4','右边5'];
    this.setData({
      leftArr: leftArr,
      rightArr: rightArr
    })
  },
  bindChange:function(e){
    const val= e.detail.value;

    this.setData({
        left:this.data.leftArr[val[0]],
        right:this.data.rightArr[val[1]]
    })

    console.log(val[0]);
    console.log(val[1])
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