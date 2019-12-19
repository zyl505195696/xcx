// pages/voice/voice.js
var tempFilePath=''
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 录制音频
record:function(){
  console.log('录制音频开始')
  // 录制音频
  wx.startRecord({
    success(res){
      tempFilePath=res.tempFilePath
    }
  })


  setTimeout(function(){
    console.log("停止事件")
    wx.stopRecord()
  },5000)
},

// 播放音频
  palyRecord:function(){
    wx.playVoice({
      filePath: tempFilePath,
    })
  },
  //暂停播放
  pauseVoice:function(){
  wx.pauseVoice()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 背景音频
    const bam = wx.getBackgroundAudioManager()
    bam.src='http：mmmm.mp3'
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