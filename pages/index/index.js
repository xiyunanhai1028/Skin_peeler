Page({

  /**
   * 页面的初始数据
   */
  data: {
    img:"../../images/1.jpg",
    immgArray:[
      { "img":"../../images/1.jpg"},
      { "img": "../../images/2.jpg"},
      { "img": "../../images/3.jpg"},
      { "img": "../../images/4.jpg"},
      { "img": "../../images/5.jpg"}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  imgClick:function(e){
    //e.target.id
    // var that=this;
    console.log(this.data.immgArray[1]);
    //这里是一个对象
    var imgs = this.data.immgArray[e.target.id];
    this.setData({
      img: imgs.img
    });
  }
})