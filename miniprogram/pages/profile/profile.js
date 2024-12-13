Page({
  data: {
    quickActions: [
      { icon: '🎫', text: '优惠券' },
      { icon: '❤️', text: '收藏夹' },
      { icon: '💰', text: '余额' },
      { icon: '🔍', text: '浏览记录' }
    ],
    rentalActions: [
      { icon: '💳', text: '待付款' },
      { icon: '📦', text: '待发货' },
      { icon: '🚚', text: '待收货' },
      { icon: '↩️', text: '待归还' },
      { icon: '📋', text: '全部订单' }
    ],
    myServices: [
      { icon: '🔄', text: '我要续租', bgColor: '#E6F3FF' },
      { icon: '💰', text: '我要买断', bgColor: '#FFF1F0' },
      { icon: '👑', text: '会员中心', bgColor: '#FFF7E6' },
      { icon: '🎁', text: '领券中心', bgColor: '#FFF2E8' },
      { icon: '🏪', text: '商家入驻', bgColor: '#F9F0FF' },
      { icon: '🏢', text: '企业特惠', bgColor: '#E6FFFB' },
      { icon: '🎲', text: '天天抽奖', bgColor: '#FCFFE6' },
      { icon: '💎', text: '闲置赚钱', bgColor: '#FFF0F6' }
    ]
  },

  onLoad() {
    // 页面加载时的逻辑
  },

  onUpgrade() {
    my.showToast({
      content: '正在前往升级页面',
      duration: 2000,
    });
    // 这里可以添加跳转到升级页面的逻辑
  }
});


