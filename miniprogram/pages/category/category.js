Page({
  data: {
    categories: [
      { id: 1, name: '电子产品', icon: '/images/product/1.jpg', desc: '手机、电脑、平板等' },
      { id: 2, name: '家居用品', icon: '/images/ant.png', desc: '家居用品描述' },
      { id: 3, name: '服饰', icon: '/images/ant.png', desc: '服饰描述' }
    ]
  },

  onBack() {
    my.navigateBack();
  },

  onClose() {
    // 实现关闭逻辑
    my.navigateBack();
  },

  onLoad() {
    // 直接使用模拟数据
    this.setData({
      categories: this.data.categories
    });
  },

  navigateToCategory(event) {
    const categoryId = event.currentTarget.dataset.id;
    my.navigateTo({
      url: `/pages/categoryDetail/categoryDetail?id=${categoryId}`
    });
  }
});

