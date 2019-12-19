// pages/down/down.js
var socketMsgQueue = []
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  websocket:function(){
    // 链接
     wx.connectSocket({
       url: 'wx://121.20',
       header:{
         'content-type':'application/json'
       },
       method:'GET'
     })
     // 监听
     wx.onSocketOpen(function(res){
       console.log('链接已打开')
       for (let i = 0; i < socketMsgQueue.length;i++){
         // 发送数据
         sendSocketMessage(socketMsgQueue[i])
       }
       socketMsgQueue=[]
     })
     // 失败操作
     wx.onSocketError(function(){
       console.log('wbs链接打开失败')
     }) 
     wx.onSocketMessage(function(res){
        console.log('收到服务器内容'+res.data)
     })
  },
  upload:function(){
    // 选择图片
    wx.chooseImage({
      success: function(res) {
        const tempFilePaths = res.tempFilePaths
        // 上传
        wx.uploadFile({
          url:'www.abc.com',
          filePath:tempFilePaths[0],
          name:'lala',
          success(res){
            console.log('上传完成')
          }
        })
      },
    })
  },
  downserve:function(){
    wx.request({
      url:'http://www.chinaweb5.cn/server.php',
      data:{
        num1:10,
        num2:20

      },
      success:function(res){
        console.log(res)
      }
    })
  },
  downrequest:function(){
     wx.request({
       url: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
       success: function (res) {
         console.log('下载完成')
         console.log(res)
         // downloadFile=res.tempFilePath
       }
     })
  },
  downloadFile:function(){
    const downloadTask=wx.downloadFile({
  url:'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
  success:function(res){
    console.log('下载完成')
    console.log(res)
    // downloadFile=res.tempFilePath
  }
})
  
  // 监控下载完成

 downloadTask.onProgressUpdate(function(res){
   console.log('下载进度',res.progress)
   console.log('已经下载的数据长度', res.totalBytesWritten)
   console.log('预期需要下载的数据总长度', res.totalBytestExpectedToWrite)
 })


  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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


function sendSocketMessage(msg){
  wx.sendSocketMessage({
    data: msg,
  })
}