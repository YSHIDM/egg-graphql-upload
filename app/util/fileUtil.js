const fs = require('fs');
const { promises: fsp } = fs;
const path = require('path');
const util = require('util');
const gm = require('gm');
gm.prototype.writePromise = util.promisify(gm.prototype.write);

/**
 * 在 prePath 位置新建形如“YYYY/MM/DD”三层文件夹,并返回创建文件路径
 * @param {string} prePath 新建文件夹位置
 * @param {string} filename 文件名称
 * @returns {Promise<string>} 新建文件文件路径
 */
let makeFilePath = async (prePath, filename) => {
  const now = new Date()
  const filePath = prePath + `/${now.getFullYear()}/${now.getMonth()}/${now.getDate()}/`
  fsp.mkdir(filePath, { recursive: true })
  return filePath + filename
}
// mkdirByDate()
/**
 * 获取文件大小
 * @param {string} filePath 文件路径
 * @returns {Promise<number>} 文件大小
 */
let getFileSize = async filePath => (await fsp.stat(filePath)).size

// getFileSize(__filename).then(o=>console.log('o', o))
/**
 * 
 * @param {{filepath:string}[]} files 
 */
let bulkUnLink = async files => files.forEach(file => fsp.unlink(file.filepath))

/**
 * 按临界值压缩上传图片,移动至存储位置,并返回文件大小
 * @param {number} criticalSize 图片压缩临界大小
 * @param {string} oldPath 旧地址
 * @param {string} newPath 新地址
 */
let renameAndGetSize = async (criticalSize, oldPath, newPath) => {
    let promises = fs.promises;
    /**
     * 递归创建文件存储位置
     */
    let storePath = path.dirname(newPath)
    await promises.mkdir(storePath, { recursive: true });

    let size = (await promises.stat(oldPath)).size
    if (size > criticalSize) {// 缓存自动删除,这里没有处理
        await gm(oldPath)
            .setFormat('JPEG')
            .quality(20)       //设置压缩质量: 0-100
            .strip()
            .autoOrient()
            .writePromise(newPath);
        return (await promises.stat(newPath)).size
    } else {
        /**
         * 移动文件
         */
        await promises.rename(oldPath, newPath);
        return size;
    }
};
let exists = async (filePath) => util.promisify(fs.exists)(filePath);
module.exports = {
    makeFilePath,
    getFileSize,
    bulkUnLink,
    renameAndGetSize,
    exists,
}