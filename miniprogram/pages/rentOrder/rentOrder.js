Page({
  data: {
    productName: '',
    productDailyRent: '',
    productImage: ''
  },
  onLoad(options) {
    const productId = options.id;
    this.loadProductDetail(productId);
  },
  loadProductDetail(productId) {
    // 模拟从服务器获取产品信息
    const products = [
      {
        id: '101',
        name: 'iPhone 13',
        dailyRent: '4.01',
        image: '/images/product/1.jpg'
      },
      // 其他产品信息
    ];

    const product = products.find(item => item.id === productId);
    if (product) {
      this.setData({
        productName: product.name,
        productDailyRent: product.dailyRent,
        productImage: product.image
      });
    } else {
      my.showToast({
        content: '未找到产品信息'
      });
    }
  }
});

