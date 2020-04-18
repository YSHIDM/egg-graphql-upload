// import { ossUpload } from '../util/ossImage';
const { Controller } = require('egg');
const path = require('path');
const fs = require('fs');
const sendToWormhole = require('stream-wormhole');

module.exports = class ImageStore extends Controller {
    // export default class ImageStore extends Controller {
  /**
     * 文件模式多文件上传，
     * 自动保存文件，再手动保存数据，
     * 数据库操作失败，删除相关文件
     */
    async uploadImages() {
      const { ctx, service, app } = this
  
      const { foreignKey='', sourceType='' } = ctx.request.body// 数据库不许为null时可以存''（空字符串）
  
      if (!foreignKey || !sourceType) {
        ctx.body = 'this.ctx.helper.getInfo(7011)'
      }
  
      const files = ctx.request.files
      const fileUtil = ctx.helper.fileUtil
      // const uploadRes = await ossUpload.ossUploadFiles(ctx.oss, config.oss.dirOfBucket, files);
      // console.log('uploadRAes', uploadRes)
      // await ctx.cleanupRequestFiles();
  
      const records = files.map(async file => ({
        foreignKey,
        sourceType,
        filename: file.filename,
        size: await fileUtil.getFileSize(file.filepath),
        url: '127.0.0.1:7002/' + path.relative(app.baseDir + '/images', file.filepath),
        path: file.filepath,
        creator: 'user.userid',
      }))
      try {
        ctx.body = await service.imageStoreSvc.bulkCreate(await Promise.all(records))
      } catch {
        fileUtil.bulkUnLink(files)
        ctx.body = '上传失败'
      }
    }
    /**
     * 删除图片
     */
    async deleteImage() {
        const { ctx, service } = this;
        const { id } = ctx.request.body;
        const image = await service.imageStoreSvc.byPk(id);
        if (image) {
            await promises.unlink(image.path);
            await service.imageStoreSvc.deleteImage(id);
        }
        ctx.body = ctx.helper.getInfo(200);
    }
    /**
     * 按外键查询
     */
    async getImageByFK() {
        const { ctx, service } = this;
        const { foreignKey } = ctx.request.query;
        const image = await service.imageStoreSvc.getImageByForeign({ foreignKey });
        ctx.body = ctx.helper.getInfo(200, null, image);
    }
    /**
     * 按 id 查询
     */
    async getImages() {
        const { ctx, service } = this;
        const { id } = ctx.request.body;
        ctx.body = await service.imageStoreSvc.getImageByUpdatedAt(id);
    }
  }
  async getImages() {
    const { ctx, service } = this
    ctx.body = await service.imageStoreSvc.getImageByUpdatedAt('20191104')
  }
  /**
     * 流模式单文件上传，text 的类型数据没找到
     */
  async uploadStreamImage() {
    const { ctx, app } = this
    // const { text } = ctx.request.body
    console.log('text', ctx.request.body)
    const stream = await ctx.getFileStream({ requireFile: false })
    if (stream.filename) {
      const filename = path.basename(stream.filename)
      const fileUtil = ctx.helper.fileUtil
      const filePath = await fileUtil.makeFilePath(app.baseDir + '/images', filename)
      stream.pipe(fs.createWriteStream(filePath))
    } else {
      // must consume the empty stream
      await sendToWormhole(stream)
    }
    ctx.body = {
      name: stream.filename,
      fields: stream.fieldname,
    }
  }
  /**
     * 流模式多文件上传，因为无法做到在保存文件前获取文件大小，暂时放弃了😂，
     * 但是在严格控制文件类型时可以使用
     */
  async uploadStreamImages() {
    const { ctx, app } = this
    const parts = ctx.multipart()// 数据流，包含所有提交数据

    let part
    let partArray = []
    let params = {}
    // let i = 0
    while ((part = await parts()) != null) {// 依次处理
      if (part.length) {//字符串形式
        params[part[0]] = part[1]
      } else {//文件形式
        if (!part.filename) {
          await sendToWormhole(part)// 处理未选择文件流，类似Linux命令 stream>/dev/null 
          continue
        }
        console.log('part', part)
        partArray.push(part)
        const filename = path.basename(part.filename)
        const fileUtil = ctx.helper.fileUtil
        const filePath = await fileUtil.makeFilePath(app.baseDir + '/images', filename)
        part.pipe(fs.createWriteStream(filePath))
      }
    }
    // partArray.map(part=>{
    //     let imageInfo = {
    //          filename : path.basename(part.filename);

    //         ...params,
    //     }
    // })

    ctx.body = { ha: 'ha' }
  }
}