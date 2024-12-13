exports.main = async (event, context) => {
  exports.main = async (event, context) => {
    try {
      // 初始化数据库引用
      const db = cloud.database({
        env: 'your-env-id' // 替换为你的环境ID
      });
  
      // 获取指定的集合
      const userCollection = db.collection('User');
  
      // 检查集合是否存在
      const collections = await db.collections();
      const hasUserCollection = collections.some(collection => collection.id === 'User');
  
      if (hasUserCollection) {
        return {
          success: false,
          message: '用户表已存在'
        };
      }
  
      // 创建集合
      await userCollection.create();
  
      return {
        success: true,
        message: '用户表创建成功'
      };
    } catch (error) {
      console.error('创建用户表失败:', error);
      return {
        success: false,
        message: '创建用户表失败: ' + error.message
      };
    }
  };
};