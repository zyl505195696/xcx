// pages/compass/compass.js
Page({
   appid:'',
   secret:'',
  /**
   * 页面的初始数据
   */
  data: {

  },
  // 获取附近小程序
  nearByPoilist:function(){
     wx.request({
       url: 'https:aaaaaa',
       success:function(e){

       }
     })
  },
  // 获取手机号
  getPhoneNumber:function(e){

  },
  // 用户登录
  userLogin:function(){
   wx.login({
      success(res){
        console.log(res.code)
      }
   })
  }
  ,
  //定时器
  setTimeout:function(){
    setTimeout(function(){
      wx.showModal({
        title: 'hello',
        content: 'hello world',
      })
    },3000)
  },
  // 转发分享
  onShareMessage:function(){

  },
  // 选择打开位置
  chooseLocation:function(){
    wx.chooseLocation({
      success: function(res) {
        console.log(res)
      },
    })
  },
  // 获取位置
  location:function(){
    wx.getLocation({
      success: function(res) {
        const latitude=res.latitude
        const longitude = res.ongitude

        // 打开
        wx.openLocation({
          latitude,
          longitude,
          scale:28
        })
      },
    })
  },
  // 获取地址
  address:function(){
  wx.chooseAddress({
    success:function(res){
       
    }
  })
  },
  // 获取用户信息
  accountInfo:function(){
    const accountInfo = wx.getAccountInfoSync()
  
  },
  // 获取accesstoken
  getAccessToken(){
   wx.request({
     url: 'https:snnn',
     success:function(res){
    console.log(res)
     }
   })
  },
  // 动画操作
  animation:function(){
  // 创建动画实例对象
    var animation = wx.createAnimation({
      duration:1000,
      timimgFunctionL:'ease'
    })
    // 对象赋值
    this.animation = animation
    // 动画格式
    animation.scale(2,2).rotate(45).step()
    // 动画放置与界面
    this.setData({
      animationData: animation.export()
    })
  },
  // 滚动操作
  scrollTo:function(){
    wx.pageScrollTo({
      scrollTop: 0,
      duration:300
    })
  },
  // 下拉刷新
  pullDownRefresh:function(){
   
  },
   // 设置背景样式
  backgroundColor:function(){
    // 上拉窗体框架的背景样式
    wx.setBackgroundColor({
      backgroundColor:'#00ff00',
      backgroundColorBottom:'#fffff00'
    })
  },
  // 取消红点

  hidetabbarRedHot:function(){
    wx.removeTabBarBadge({
      index:1
    })
    // 显示tabbar
    wx.showTabBar({
      
    })
    wx.hideTabBarRedDot({
      index: 1,
    })
  },
  // 动态tabber
  tabbar:function(){
     // 显示右上角的文本
     wx.setTabBarBadge({
       index: 0,
       text: '11',
     })
   //  隐藏tabbar
     wx.hideTabBar({
       
     })

    // 显示tabbar右上角的红点
    wx.showTabBarRedDot({
      index: 1,
    })


  },
  // 置顶文本
  topBarText:function(){
    wx.setTopBarText({
      text: '置顶a文本',
    })
  },
  // 动态设置导航栏
  navigationBar:function(){
    // 设置导航栏的颜色
    wx.setNavigationBarColor({
      frontColor: '#ffffff',
      backgroundColor: '#f00',
    })

    // 设置导航条的标题
    wx.setNavigationBarTitle({
      title: '微信界面设置',
    })

    // 设置导航条的加载动画
    wx.showNavigationBarLoading()
    // 3s后隐藏动画
    setTimeout(function(){
      wx.hideNavigationBarLoading()
    },3000)
  },
  // 窗口监听操作
  window:function(){
     wx.onWifiConnected(function(res){
        console.log(res)
     })
  },

  
  // 系统振动
  vibrate:function(){
    wx.vibrateLong({
      success:function(res){
        console.log(res)
      }
    })
  },
  // 二维码扫码
  scanCode:function(){
    wx.scanCode({
      onlyFromCamera:false,
      success:function(res){
        console.log(res)
      }
    })
  },
   // 打电话
  makePhone:function(){
     wx.makePhoneCall({
       phoneNumber: '1512768012',
     })
  },
  // 手机方向操作
  deviceMotion:function(){
     wx.startDeviceMontionListening({
       interval:'normal',
       success:function(res){
         wx.onDeviceMontionChange(function(res){
           console.log(res)
         })
       }
     })
  },
  // 陀螺仪
  gyroscope:function(){
    wx.startGyroscope({
      success:function(){
        wx.onGyroscopeChange(function(res){
          console.log('x'+res.x)
        })
      }
    })
  },
  // 设置屏幕亮度
  setScreen:function(){
   wx.setScreenBrightness({
     value: 1,
   })
  },
  // 屏幕设置
  screen:function(){
    wx.getScreenBrightness({
      success(res){
        console.log(res)
      }
    })
  },
  // 剪切板
  setClipboard:function(){
   wx.setClipboardData({
     data: 'HELLO',
     success:function(res){
       wx.getClipboardData({
         success(res){
           console.log(res.data)
         }
       })
     }
   })
  },
  // 开启加速器

  accelerometer:function(){
     wx.startAccelerometer({
       interval:'game'
     })
     wx.onAccelerometerChange(function(res){
       console.log('x'+res.x)
       console.log('y' + res.y)
       console.log('z' + res.z)
     })
  },
  //性能警告监控
  memoryWarning:function(){
   wx.onMemoryWarning(function(){
     console.log('内存警告')
   })
  },
  // wifi
  getConnectedWifi:function(){
    wx.getConnectedWifi({
      success:function(res){
        console.log(res)
      }
    })
  },
  // 罗盘监控开始
  startCompass:function(){
 
   wx.startCompass({
     success:function(){
       wx.onCompassChange(function(res){
         console.log(res)
       })
     }
   })
  },
  // 罗盘监控结束
  endCompass:function(){
     wx.stopCompass({
       
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