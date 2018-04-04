// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // var reqUrl = "http://127.0.0.1/detail.json";
    var reqUrl = {
      "rating": {
        "max": 10,
        "average": 8.1,
        "stars": "40",
        "min": 0
      },
      "reviews_count": 233,
      "wish_count": 30033,
      "douban_site": "",
      "year": "2017",
      "images": {
        "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2517518428.webp",
        "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2517518428.webp",
        "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2517518428.webp"
      },
      "alt": "https://movie.douban.com/subject/26942631/",
      "id": "26942631",
      "mobile_url": "https://movie.douban.com/subject/26942631/mobile",
      "title": "起跑线",
      "do_count": null,
      "share_url": "https://m.douban.com/movie/subject/26942631",
      "seasons_count": null,
      "schedule_url": "https://movie.douban.com/subject/26942631/cinema/",
      "episodes_count": null,
      "countries": [
        "印度"
      ],
      "genres": [
        "剧情",
        "喜剧"
      ],
      "collect_count": 16732,
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1108861/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48861.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48861.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p48861.webp"
          },
          "name": "伊尔凡·可汗",
          "id": "1108861"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1263714/",
          "avatars": {
            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1477506649.77.webp",
            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1477506649.77.webp",
            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1477506649.77.webp"
          },
          "name": "萨巴·卡玛尔",
          "id": "1263714"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1049993/",
          "avatars": {
            "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1521775712.45.webp",
            "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1521775712.45.webp",
            "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1521775712.45.webp"
          },
          "name": "内哈·迪胡皮阿",
          "id": "1049993"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1353015/",
          "avatars": {
            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510021787.89.webp",
            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510021787.89.webp",
            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510021787.89.webp"
          },
          "name": "迪帕克·迪布里亚尔",
          "id": "1353015"
        }
      ],
      "current_season": null,
      "original_title": "Hindi Medium",
      "summary": "一对印度的中产阶级夫妇:服装店老板拉吉（伊尔凡·可汗 Irrfan Khan 饰）与太太米塔（萨巴·卡玛尔 Saba Qamar 饰）为了让女儿皮娅（蒂希塔·塞加尔 Dishita Sehgal 饰）接受更好的教育想尽了各种办法。而当他们费劲心思终于要将女儿送进名校时,事情却又发生了意想不到的变化……",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1383681/",
          "avatars": {
            "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510019957.97.webp",
            "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510019957.97.webp",
            "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510019957.97.webp"
          },
          "name": "萨基特·乔杜里",
          "id": "1383681"
        }
      ],
      "comments_count": 4901,
      "ratings_count": 15289,
      "aka": [
        "人生起跑线(台)",
        "可怜天下父母心",
        "हिंदी"
      ]
    };
    var _this = this;
    _this.setData({
      details: reqUrl
    })

    // wx.request({
    //   url: reqUrl, //仅为示例，并非真实的接口地址
    //   data: {
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log("sss");
    //     console.log(res.data);
    //     _this.setData({
    //       details: res.data
    //     })
    //     // this.data.movies = res.data;
    //   },
    //   fail: function (res) {
    //     console.log("eeee")
    //     console.log(res.data)
    //   }
    // })

    console.log(options);
     let id = options.id;


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