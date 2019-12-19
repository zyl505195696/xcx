// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    photo:'',
    cityies :[
      {name:'aa'},
      { name: 'bb' },
      { name: 'cc' },
    ],
    abc:[
      '北京',
      '上海',
      '广州'
    ],
    packerVal:''
  },
  formSubmit:function(e){
   console.log(e.detail.value)
  },

  formReset:function(){

  },
  pickerChange(e){
   var i=e.detail.value
   console.log(this.data.abc[i])
   this.setData({
     packerVal: this.data.abc[i]
   })
  },
  takePhoto:function(){
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
      quality:'height',
      success:(res)=>{
       
      wx.setStorage({
        key: 'photo',
        data: res.tempImagePath,
      })
      wx.redirectTo({
        url: '/pages/form/form',
      })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
  wx.getStorage({
    key: 'photo',
    success: function(res) {
      that.setData({
        photo:res.data
      })
    },
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