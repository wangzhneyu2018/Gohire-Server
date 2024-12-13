Page({

  data: {
    orders: []
  },

  onLoad() {
    this.setData({
      orders:  [
        {
          id: '1',
          storeIcon: '运动',
          storeName: '步凡者运动官方旗舰店',
          isOfficial: true,
          status: '待支付',
          productImage: '/images/ant.png',
          productName: '冰钎子 冰锥钢锥 滑冰车冰爬型实心电镀一体把手 不生锈',
          productSpec: '实心普通款（55cm一对）送...',
          productPrice: '7.3',
          productQuantity: 1,
          totalAmount: '7.3',
          shippingFee: '免运费',
          hasWarning: true,
          warningMessage: '该商品即将抢光，请尽快支付'
        },
        {
          id: '2',
          storeIcon: '电子',
          storeName: '科技数码专营店',
          isOfficial: false,
          status: '待发货',
          productImage: '/images/cart.png',
          productName: '智能手环 心率监测 防水运动手表',
          productSpec: '黑色 标准版',
          productPrice: '199',
          productQuantity: 1,
          totalAmount: '199',
          shippingFee: '免运费',
          hasWarning: false
        }
      ]
    });
  }

});
