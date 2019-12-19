// pages/music/music.js
 var _songsList = [
   {
     dataUrl:'1',
     name:'2',
     singer:'3',
     coverImgUrl:'4'
   }
 ]
 var _items=['播放列表','歌曲','专辑','演唱者']
 var inputVal= ""
Page({

  /**
   * 页面的初始数据
   */
  data: {
    fontshow:'hello',
    songsList:_songsList,
    actionSheetItems:_items,
    actionSheetHidden:true,

  },
  // 删除
  delete:function(){
  wx.removeStorage({
    key: 'myhello',
    success: function(res) {
      console.log(res)
    },
  })
  },
  // 读取
  getstorage:function(){
    wx.getStorage({
      key: 'myhello',
      success: function(res) {
        console.log(res)
      },
    })
  },
   // 储存
   storage:function(){
   wx.setStorage({
     key: 'myhello',
     data: inputVal,
     success:function(){
       console.log('储存成功')
     },
     fail:function(e){
       console.log(e)
     }
   })
   },


  inputVal:function(e){
   inputVal=e.detail.value
  },



  //  演示隐藏对话框
  actionSheetChange:function(){
    this.setData({
      actionSheetHidden:!this.data.actionSheetHidden
    })
  },
  // 
chooseImage:function(){
  wx.chooseImage({
    count:9,
    sizeType:['original','compresses'],
    sourceType:['album','camera'],
    success:function(res){
      console.log(res)
      const temFilePath = res.tempFilePaths
      wx.getImageInfo({
        src: res.tempFilePaths[0],
        success(res){
          console.log(res)
           //预览图片
           wx.previewImage({
             urls: [res.tempFilePaths[0]],
           })

           // 保存操作
           wx.saveImageToPhotosAlbum({
             filePath: tempFilePaths[0],
             success(res){
               console.log('保存成功')
               console.log(res)
             }
           })
        }
      })
    }
  })
},
// 压缩图片
  compressImage:function(){
     wx.compressImage({
         src:'',
         quality:70,
         success(res){

         }
     })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
 
  },
  saveData:function(){
  wx.setStorage({
    key: 'name',
    data: 'jason',
  })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   wx.getStorage({
     key: 'name',
     success: function(res) {
       console.log(res)
     },
   })
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