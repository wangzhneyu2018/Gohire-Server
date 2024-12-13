Page({
  data: {
    productName: '',
    productPrice: 12000,
    productImage: '',
    productColor: [],
    selectedColor: '',
    productStorage: [],
    selectedStorage: '',
    colorPriceAdjustments: {
      '雅川黑': 0,
      '南耀紫': 100,
      '白银': 200,
      '雅川青': 300
    },
    storagePriceAdjustments: {
      '12+128GB': 0,
      '12+256GB': 500,
      '12+512GB': 1000
    },
    totalPrice: 12000
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
        price: 12000,
        image: '/images/product/1.jpg',
        color: ['雅川黑', '南耀紫', '白银', '雅川青'],
        storage: ['12+128GB','12+256GB', '12+512GB']
      },
      // 其他产品信息
    ];

    const product = products.find(item => item.id === productId);
    if (product) {
      this.setData({
        productName: product.name,
        productPrice: product.price,
        productImage: product.image,
        productColor: product.color,
        productStorage: product.storage,
        totalPrice: product.price
      });
    } else {
      my.showToast({
        content: '未找到产品信息'
      });
    }
  },
  selectColor(e) {
    const color = e.target.dataset.color;
    this.setData({
      selectedColor: color
    });
    this.calculateTotalPrice();
  },
  selectStorage(e) {
    const storage = e.target.dataset.storage;
    this.setData({
      selectedStorage: storage
    });
    this.calculateTotalPrice();
  },
  calculateTotalPrice() {
    const basePrice = this.data.productPrice;
    const colorAdjustment = this.data.colorPriceAdjustments[this.data.selectedColor] || 0;
    const storageAdjustment = this.data.storagePriceAdjustments[this.data.selectedStorage] || 0;
    const totalPrice = basePrice + colorAdjustment + storageAdjustment;
    this.setData({
      totalPrice: totalPrice
    });
  }
});