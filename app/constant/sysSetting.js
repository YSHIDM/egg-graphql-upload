// 常量
module.exports = {
  /**
     * 图片相关
     */
  ABOUT_IMAGE: {
    /**
       * 项目中图片上传缓存位置
       */
    TMP_IMAGES_PATH: '/egg-multipart-tmp',
    /**
       * 项目中图片存储位置
       */
    STORE_IMAGES_PATH: '/images',
    /**
       * 图片压缩临界值,200K,值单位:byte
       */
    IMAGE_CRITICAL_SIZE: 204800, // 2000 * 1024,
    /**
       * 图片名称最大长度
       */
    FILENAME_MAX_LENGTH: 50,
  },
  /**
     * 图片类型
     */
  IMAGE_TYPE: {
    // 客户
    CUST: 'cust',
    // 备注
    MEMO: 'memo',
    // 资产
    ASSET: 'asset',
    // 补充材料
    SUPPLY_MATERIAL: 'supplyMaterial',
    // 评估
    NOTARIZATION: 'notarization',
    // 公司
    COMPANY: 'company',
  },
  /**
     * 备注类型
     */
  MEMO_TYPE: {
    CUST: 'cust',
  },
  /**
     * 设置类型
     */
  SETTING_TYPE: {
    CUST: 'cust',
    ASSESS: 'assess',
    APPLICATION: 'application',
  },
  /**
     * 模板类型
     */
  TEMPLATE_TYPE: {
    // 资产
    ASSET: 'asset',
    // 补充材料
    SUPPLY_MATERIAL: 'supplyMaterial',
    // 合同
    CONTRACT: 'contract',
  },
  /**
     * 模板数据类型
     */
  TEMPLATE_DATA_TYPE: {
    CUST: 'cust',
    // 资料
    MATERIAL: 'material',
  },
  // 客户关系类型
  CUST_RELATED_TYPE: {
    // 备注
    MEMO: 'memo',
    // 图片
    IMAGE_STORE: 'imageStore',
    // 资产
    ASSET: 'asset',
    // 补充材料
    SUPPLY_MATERIAL: 'supplyMaterial',
    // 额度
    QUOTA: 'quota',
    // 合同
    CONTRACT: 'contract',
  },
  // 角色 id 集合
  ROLE_IDS: {
    // 评估
    ASSESS: 'ROLEaoKSLtdRBh',
  },
  // 审批类型
  SIGN_TYPE: {
    // 会签 countersign
    COUNTERSIGN: 0,
    // 或签 orSign
    OR_SIGN: 1,
  },
}
