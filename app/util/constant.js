module.exports = {
  /**
     * @param 主机地址
     */
  LOCALHOST: 'https://127.0.0.1:7001/',
  /**
     * @param 项目中图片上传缓存位置
     */
  TMP_IMAGES_PATH: '/egg-multipart-tmp',
  /**
     * @param 项目中图片存储位置
     */
  STORE_IMAGES_PATH: '/images',

  // 图片类型常量
  /**
     * @param 应用logo类型
     */
  APP_LOGO: 'APP_LOGO',
  /**
     * @param 应用备注
     */
  APP_MEMO: 'APP_MEMO',
  /**
     * @param 图片压缩临界值,200K,值单位:byte
     */
  IMAGE_CRITICAL_SIZE: 200 * 1024
}