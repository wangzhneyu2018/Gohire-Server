Page({
  data: {
    categories: [] , // 分类列表初始化为空数组
   
    // 热阻爆款
    promoTags: [
      { id: 1, name: '热租爆款' },
      { id: 2, name: '二手优选' },
      { id: 3, name: '潮玩数码' },
      { id: 4, name: '运动户外' },
      { id: 5, name: '餐饮设备' }
    ],
    // 产品轮播图

    currentIndex: 0,
    products: [
      {
        id: 1,
        name: "HUAWEI Mate XT 非凡大屏",
        price: "¥48.28/天",
        image: "/images/product/1.jpg"
      },
      {
        id: 2,
        name: "HUAWEI P60 Pro",
        price: "¥52.99/天",
        image: "/images/product/2.jpg"
      },
      {
        id: 3,
        name: "HUAWEI MatePad Pro",
        price: "¥45.50/天",
        image: "/images/product/3.jpg"
      },
      {
        id: 4,
        name: "HUAWEI Watch GT4",
        price: "¥35.99/天",
        image: "/images/product/4.jpg"
      },
      {
        id: 4,
        name: "HUAWEI Watch GT4",
        price: "¥35.99/天",
        image: "/images/product/5.jpg"
      }
    ],
    // 产品列表
    productsList: [
      {
        id: 1,
        name: "iPhone 15",
        price: "0.03",
        image: "/images/product/1.jpg",
        tag: "全新",
        rentalStatus: "可买断",
        rentalType: "可续租"
      },
      {
        id: 2,
        name: "小米 15 Pro",
        price: "9.87",
        image: "/images/product/1.jpg",
        tag: "全新",
        rentalStatus: "可买断",
        rentalType: "可续租"
      },
      {
        id: 3,
        name: "OPPO Find X7",
        price: "8.99",
        image: "/images/product/1.jpg",
        tag: "全新",
        rentalStatus: "可买断",
        rentalType: "可续租"
      },
      {
        id: 4,
        name: "vivo X100 Pro",
        price: "10.99",
        image: "/images/product/1.jpg",
        tag: "全新",
        rentalStatus: "可买断",
        rentalType: "可续租"
      },
      {
        id: 1,
        name: "iPhone 15",
        price: "0.03",
        image: "/images/product/1.jpg",
        tag: "全新",
        rentalStatus: "可买断",
        rentalType: "可续租"
      },
      {
        id: 2,
        name: "小米 15 Pro",
        price: "9.87",
        image: "/images/product/1.jpg",
        tag: "全新",
        rentalStatus: "可买断",
        rentalType: "可续租"
      },
      {
        id: 3,
        name: "OPPO Find X7",
        price: "8.99",
        image: "/images/product/1.jpg",
        tag: "全新",
        rentalStatus: "可买断",
        rentalType: "可续租"
      },
      {
        id: 4,
        name: "vivo X100 Pro",
        price: "10.99",
        image: "/images/product/1.jpg",
        tag: "全新",
        rentalStatus: "可买断",
        rentalType: "可续租"
      }
    ]
    
  },
  // 页面加载时轮播图的逻辑
  onSwiperChange(e) {
    this.setData({
      currentIndex: e.detail.current
    });
  },

  onLoad() {
    // 模拟从服务器获取分类列表数据
    this.fetchCategories();
  },

  async fetchCategories() {
    try {
      const res = await my.cloud.database().collection('popularCategories').get();
      console.log('Fetched response:', res); // 打印整个响应对象

      if (res) {
        this.setData({
          categories: res
        });
      } else {
        my.showToast({
          content: '数据获取失败，请重试',
          type: 'fail'
        });
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      my.showToast({
        content: '数据获取失败，请重试',
        type: 'fail'
      });
    }
  },

  goToCategoryPage(event) {
    const categoryId = event.currentTarget.dataset.id;
    const categoryName = event.currentTarget.dataset.name;

    // 跳转到对应的页面
    my.navigateTo({
      url: `/pages/category/category?id=${categoryId}&name=${categoryName}`
    });
  },

  onSearch() {
    // 搜索功能
  },

  onCategoryTap(event) {
    const { id } = event.target.dataset;
    // 处理分类点击
  },

  onProductTap(event) {
    // 处理产品点击
  }
});

