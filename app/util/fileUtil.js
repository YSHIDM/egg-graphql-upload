const { promises: fsp } = require('fs');
/**
 * 在 prePath 位置新建形如“YYYY/MM/DD”三层文件夹,并返回创建文件路径
 * @param {string} prePath 新建文件夹位置
 * @param {string} filename 文件名称
 * @returns {Promise<string>} 新建文件文件路径
 */
let makeFilePath = async (prePath, filename) => {
    const now = new Date();
    const filePath = prePath + `/${now.getFullYear()}/${now.getMonth()}/${now.getDate()}/`;
    fsp.mkdir(filePath, { recursive: true });
    return filePath + filename;
}
// mkdirByDate()
/**
 * 获取文件大小
 * @param {string} filePath 文件路径
 * @returns {Promise<number>} 文件大小
 */
let getFileSize = async filePath => (await fsp.stat(filePath)).size;

// getFileSize(__filename).then(o=>console.log('o', o))
/**
 * 
 * @param {{filepath:string}[]} files 
 */
let bulkUnLink = async files =>files.forEach(file=>fsp.unlink(file.filepath))
module.exports = {
    makeFilePath,
    getFileSize,
    bulkUnLink,
}