
const { Controller } = require('egg');
// import { ossUpload } from '../util/ossImage';
const path = require('path');
const { promises } = require('fs');

module.exports = class ImageStore extends Controller {
    async uploadImages() {
        // const { ctx, service, app, config } = this;
        const { ctx, service, app } = this;

        const { foreignKey='', sourceType, } = ctx.request.body;
        // if (!foreignKey || !sourceType) {
        //     ctx.body = this.ctx.helper.getInfo(7011);
        // }

        const files = ctx.request['files'];

        // const uploadRes = await ossUpload.ossUploadFiles(ctx.oss, config.oss.dirOfBucket, files);
        // console.log('uploadRAes', uploadRes)
        // await ctx.cleanupRequestFiles();

        const records = files.map(async file => ({
            foreignKey,
            sourceType,
            filename: file.filename,
            size: (await promises.stat(file.filepath)).size,
            url: '127.0.0.1:7002/'+path.relative(app.baseDir+'/images', file.filepath),
            path: file.filepath,
            creator: 'user.userid',
        }));

        ctx.body = await service.imageStoreSvc.bulkCreate(await Promise.all(records));
    }
    async getImages(){
        const { ctx, service } = this;
        ctx.body = await service.imageStoreSvc.getImageByUpdatedAt('20191104');
    }
}