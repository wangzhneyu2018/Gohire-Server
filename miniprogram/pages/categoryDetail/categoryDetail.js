Page({
  data: {
    brands: [{
        name: '苹果',
        image: '/images/product/1.jpg'
      },
      {
        name: '华为',
        image: '/images/product/1.jpg'
      },
      {
        name: 'iPhone15',
        image: '/images/product/1.jpg'
      },
      {
        name: '小米',
        image: '/images/product/1.jpg'
      },
      {
        name: 'VIVO',
        image: '/images/product/1.jpg'
      },
      {
        name: '华为',
        image: '/images/product/1.jpg'
      },
      {
        name: 'iPhone15',
        image: '/images/product/1.jpg'
      },
      {
        name: '小米',
        image: '/images/product/1.jpg'
      },
    ],
    category: {},
    products: [],
    searchQuery: '',
    filteredProducts: [],
    activeFilter: '',
    priceOrder: 'asc',
    salesOrder: 'asc',
    conditionText: '成色', // 设置默认值
    shippingAddress: '本地' // 用于存储当前位置
  },

  onLoad(options) {
    const categoryId = options.id;
    if (categoryId) {
      this.loadCategoryAndProducts(categoryId);
      
    } else {
      my.showToast({
        type: 'fail',
        content: '分类 ID 未提供'
      });
    }
  },

  loadCategoryAndProducts(categoryId) {
    const category = this.getCategoryById(categoryId);
    if (category) {
      this.setData({
        category: category,
        products: category.products,
        filteredProducts: category.products, // 初始化时显示所有产品
        // conditionText: '商品成色' // 确保在加载产品时也设置商品成色文字
      });
    } else {
      my.showToast({
        type: 'fail',
        content: '分类未找到'
      });
    }
  },

  getCategoryById(categoryId) {
    const categories = [{
        id: 1,
        name: '电子产品',
        icon: '/images/electronics.png',
        desc: '手机、电脑、平板等',
        products: [{
            name: 'iPhone 13',
            price: 6999,
            stock: 10,
            image: '/images/product/1.jpg',
            status: '全新',
            title: '【12月促销季】首月五折 iPhone 15promax 全新 通过率高 非',
            services: ['可买断', '可续租', '免赔保障', '租期质保'],
            promotionTag: '苹果手机热门榜TOP3',
            serviceTags: ['可买断', '可续租', '免赔保障', '租期质保'],
            rentalCount: '89人租过',
            shippingAddress:'杭州市',
            merchantIcon: '/assets/merchants/merchant1.png'
          },
          {
            id: 102,
            name: 'MacBook Pro',
            price: 12999,
            stock: 5
          },
          {
            id: 103,
            name: 'iPad Air',
            price: 4999,
            stock: 20
          }
        ]
      },
      {
        id: 2,
        name: '家居用品',
        icon: '/images/home.png',
        desc: '家居用品描述',
        products: [{
            id: 201,
            name: '沙发',
            price: 3999,
            stock: 3
          },
          {
            id: 202,
            name: '床垫',
            price: 2999,
            stock: 10
          },
          {
            id: 203,
            name: '餐桌',
            price: 1999,
            stock: 5
          }
        ]
      },
      {
        id: 3,
        name: '服饰',
        icon: '/images/clothing.png',
        desc: '服饰描述',
        products: [{
            id: 301,
            name: 'T恤',
            price: 99,
            stock: 50
          },
          {
            id: 302,
            name: '牛仔裤',
            price: 199,
            stock: 30
          },
          {
            id: 303,
            name: '外套',
            price: 299,
            stock: 20
          }
        ]
      }
    ];
    return categories.find(category => category.id === parseInt(categoryId));
  },

    handleInput(e) {
    const query = e.detail.value.toLowerCase();
    console.log('Input Query:', query); // 输出输入内容
    this.setData({
      searchQuery: query
    });
  },

  handleSearch() {
    const query = this.data.searchQuery.toLowerCase();
    console.log('Search Query:', query); // 输出搜索内容
    const filtered = this.data.products.filter(product => {
      const title = product.title ? product.title.toLowerCase() : '';
      const desc = product.desc ? product.desc.toLowerCase() : '';
      return title.includes(query) || desc.includes(query);
    });
    console.log('Filtered Products:', filtered); // 输出过滤后的产品
    this.setData({
      filteredProducts: filtered
    });
  },
  handleFilter(e) {
    const filterType = e.currentTarget.dataset.type;
    let sortedProducts = []; // 声明一个变量用于存储排序后的产品

    if (filterType === 'comprehensive') {
      // 综合排序显示所有产品
      this.setData({
        filteredProducts: this.data.products,
        activeFilter: filterType
      });
      return;
    }

    if (filterType === 'price') {
      let newPriceOrder = this.data.priceOrder === 'asc' ? 'desc' : 'asc';

      // 对产品按价格排序
      sortedProducts = [...this.data.filteredProducts].sort((a, b) => {
        if (newPriceOrder === 'asc') {
          return a.price - b.price; // 升序
        } else {
          return b.price - a.price; // 降序
        }
      });

      // 更新状态
      this.setData({
        filteredProducts: sortedProducts,
        activeFilter: filterType,
        priceOrder: newPriceOrder
      });

      // 显示排序方向提示
      my.showToast({
        content: newPriceOrder === 'asc' ? '价格从低到高排序' : '价格从高到低排序',
        duration: 1000
      });
    }

    if (filterType === 'sales') {
      let newSalesOrder = this.data.salesOrder === 'asc' ? 'desc' : 'asc';

      // 对产品按销量排序
      sortedProducts = [...this.data.filteredProducts].sort((a, b) => {
        // 从字符串中提取数字（例如："89人租过" => 89）
        const getSalesNumber = (str) => {
          if (!str) return 0;
          const match = str.match(/\d+/);
          return match ? parseInt(match[0]) : 0;
        };

        const salesA = getSalesNumber(a.rentalCount);
        const salesB = getSalesNumber(b.rentalCount);

        if (newSalesOrder === 'asc') {
          return salesA - salesB; // 升序
        } else {
          return salesB - salesA; // 降序
        }
      });

      // 更新状态
      this.setData({
        filteredProducts: sortedProducts,
        activeFilter: filterType,
        salesOrder: newSalesOrder
      });

      // 显示排序方向提示
      my.showToast({
        content: newSalesOrder === 'asc' ? '销量从低到高排序' : '销量从高到低排序',
        duration: 1000
      });
    }

    // ... 其他排序逻辑
   


  },
   // 将handleFilterPanel方法移到外层
   handleFilterPanel() {
    // 切换商品成色
    var newConditionType = '';
    var newConditionText = '';

    if (this.data.conditionType === '') {
      newConditionType = '二手';
      newConditionText = '二手';
    } else if (this.data.conditionType === '二手') {
      newConditionType = '全新';
      newConditionText = '全新';
    } else {
      newConditionType = '';
      newConditionText = '成色';
    }

    var filteredProducts = this.data.products;
    if (newConditionType !== '') {
      filteredProducts = this.data.products.filter(function(product) {
        return product.status === newConditionType;
      });
    }

    this.setData({
      conditionType: newConditionType,
      conditionText: newConditionText,
      activeFilter: 'condition',
      filteredProducts: filteredProducts
    });

    my.showToast({
      content: '已筛选' + newConditionText + '商品',
      duration: 1000
    });
    
  },
// 本地筛选
getCurrentLocation() {
  var that = this;
  my.getLocation({
    type: 1,
    success(res) {
      var currentAddress = res.city; // 使用城市名称
      that.setData({
        shippingAddress: currentAddress,
        activeFilter: 'local' // 设置选中状态
      });

      // 筛选符合地址的商品
      var filteredProducts = that.data.products.filter(function(product) {
        return product.shippingAddress === currentAddress;
      });

      that.setData({
        filteredProducts: filteredProducts
      });

      my.showToast({
        content: '已筛选本地商品',
        duration: 1000
      });
    },
    fail() {
      my.showToast({
        content: '无法获取当前位置',
        duration: 1000
      });
    }
  });
},

resetFilter() {
  this.setData({
    activeFilter: '',
    filteredProducts: this.data.products
  });
},
// 点击跳转到详情页
navigateToProductDetail(e) {
  var productId = e.currentTarget.dataset.id;
  my.navigateTo({
    url: '/pages/productDetail/productDetail?id=' + productId
  });
},

});