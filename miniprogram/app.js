App({
  "usingComponents": {
    "avatar": "ant-design-mini/es/Avatar/index",
    "icon": "ant-design-mini/es/Icon/index",
    "input": "ant-design-mini/es/Input/index"
  },
  onLoad() {
    my.setNavigationBar({
      backgroundColor: '#3629B7', // 导航栏背景颜色
      frontColor: '#1573FF' // 导航栏文字颜色
    });
  },
  onLaunch(options) {
    // 第一次打开
    // options.query == {number:1}
    console.info('App onLaunch');
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
  onLaunch(options) {
    const context = my.cloud.createCloudContext({
    // env是直接云开发环境对应的ID,关联什么环境填写什么环境的ID，填写错误会报错
    env: 'env-00jxhog1jpee'
  });
  // 下面这一行意思是初始化云环境
  context.init();
  // 设置context的调用方法,my.后面的名称可以自定义
  my.cloud = context;
  // 第一次打开
  // options.query == {number:1}
  },

});
