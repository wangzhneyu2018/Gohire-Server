Page({
  data: {
    product: {
      CustomerPhone: '18511907806'
    },
    activeTab: 0, //激活第一个Tab
    tabs: [{
        title: '商品详情',
        key: 'details'
      },
      {
        title: '租赁说明',
        key: 'rental'
      },
      {
        title: '常见问题',
        key: 'faq'
      }
    ],
    steps: [{
        icon: '/images/order.png',
        text: '免押下单',
        subtext: '选购商品'
      },
      {
        icon: '/images/delivery.png',
        text: '商家发货',
        subtext: '申转通过后'
      },
      {
        icon: '/images/receive.png',
        text: '签收使用',
        subtext: '开启体验'
      },
      {
        icon: '/images/renew.png',
        text: '到期',
        subtext: '续租/买断/归还'
      }
    ],
    selectedStartDay: 2,
    selectedEndDay: 5,
    days: [1, 2, 3, 4, 5, 6],
    postRentalOptions: [{
        title: '续租',
        desc: '查看订单 > 一键续租(按订单日租金续租) > 支付租金 > 继续租用'
      },
      {
        title: '买断',
        desc: '查看订单 > 一键买断(若商品支持买断) > 支付尾款 > 终所有'
      },
      {
        title: '归还',
        desc: '查看订单 > 自行寄回设备 > 商家签收并质检设备 > 解冻押金'
      }
    ],
    // 问题
    activeIndex: 0,
    faqList: [{
        key: '0',
        question: '关于租期计算问题?',
        answer: '租期是从用户签收日次日起计算（正常是按快递送到次日，由于用户原因延迟签收时间的，延迟时间计入租期内）。具体以租赁订单为准。'
      },
      {
        key: '1',
        question: '取消订单后什么时候退款?',
        answer: '订单取消后资金会立即原路退回，到账时间以银行实际处理时间为准。'
      },
      {
        key: '2',
        question: '发货前的订单能不能取消?',
        answer: '发货前的订单可以申请取消，请联系客服处理。'
      },
      {
        key: '3',
        question: '订单到期后如何归还?',
        answer: '订单到期后请按照原包装进行打包，联系客服获取退货地址进行寄回。'
      },
      {
        key: '4',
        question: '订单如何续租?',
        answer: '在订单详情页面选择续租，选择续租时间并完成支付即可。'
      },
      {
        key: '5',
        question: '可以提前归还吗？���付违约金吗？',
        answer: '可以提前归还，但租金会按照实际使用天数计算，不收取违约金。'
      },
      {
        key: '6',
        question: '为什么没备归还订单还有余额?',
        answer: '归还后余额可能是押金或未结算的费用，确认商品完好后会自动退还。'
      }
    ],
    // 客服
    isPopupVisible: false,
    phoneNumber: '10086' // 这里设置要拨打的电话号码
  },
  // 菜单切换



  onLoad(options) {
    const productId = options.id;
    if (productId) {
      this.loadProductDetail(productId);
    } else {
      my.showToast({
        type: 'fail',
        content: '产品 ID 未提供'
      });
    }
  },
  // 菜单切换
  onTabChange(e) {
    // 确保这个方法存在
    console.log('Tab changed:', e);
  },

  handleTabClick(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      activeTab: index
    });
  },
  // 切换答
  // 显示或隐藏答案的函数
  toggleAnswer(event) {
    const index = event.currentTarget.dataset.index
    this.setData({
      activeIndex: this.data.activeIndex === index ? -1 : index
    })
  },


  loadProductDetail(productId) {
    // 假设 products 是从服务器获取的或在地定义的产品数组
    const products = [{
        id: 101,
        name: 'iPhone 13',
        dailyRent: 6999,
        retailPrice: 12000,
        stock: 10,
        image: '/images/product/1.jpg',
        swiperImages: [
          '/images/product/1.jpg',
          '/images/product/2.jpg',
          '/images/product/2.jpg'
        ],
        status: '全新',
        title: '【12月促销季】首月五折 iPhone 15promax 全新 通过率高',
        services: ['可买断', '可续租', '免赔保障', '租期质保'],
        promotionTag: '苹果手机热门榜TOP3',
        serviceTags: ['可买断', '可续租', '免赔保障', '租期质保'],
        rentalCount: '89人租过',
        shippingAddress: '杭州市',
        merchantIcon: '/assets/merchants/merchant1.png',
        CustomerPhone: '18511907806',
        serviceProvider:'京宝爷'
      },
      // 其他产品信息
    ];

    const product = products.find(item => item.id === parseInt(productId));
    if (product) {
      this.setData({
        product: product
      });
    } else {
      my.showToast({
        content: '未找到产品信息'
      });
    }
  },

  // 底部导航栏
  onHomeTap() {
    // 跳转到首页
    my.switchTab({
      url: '/pages/index/index'
    });
  },
  onServiceTap() {
    const phoneNumber = this.data.product.CustomerPhone;
    my.makePhoneCall({
      number: phoneNumber,
      success: () => {
        console.log('拨号成功');
      },
      fail: (error) => {
        console.error('拨号失败', error);
      }
    });
  },
  onBuyTap() {
    const product = this.data.product;
    my.navigateTo({
      url: `/pages/order/order?id=${product.id
}`    });
  },
  onRentTap() {
    const product = this.data.product;
    my.navigateTo({
      url: `/pages/rentOrder/rentOrder?id=${product.id}`
    });
  },
  // 客服电话弹出框
  showPopup() {
    this.setData({
      isPopupVisible: true
    });
  },

  hidePopup() {
    this.setData({
      isPopupVisible: false
    });
  },

  makePhoneCall() {
    const phoneNumber = this.data.product.CustomerPhone;
    my.makePhoneCall({
      number: phoneNumber,
      success: () => {
        console.log('拨打电话成功');
        this.hidePopup();
      },
      fail: (error) => {
        console.error('拨打电话失败:', error);
        my.showToast({
          type: 'exception',
          content: '拨打电话失败,请重试',
          duration: 2000
        });
        this.hidePopup();
      }
    });
  }
});