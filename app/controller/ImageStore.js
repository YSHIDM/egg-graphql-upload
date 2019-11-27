// import { ossUpload } from '../util/ossImage';
const { Controller } = require('egg');
const path = require('path');
const fs = require('fs');
const sendToWormhole = require('stream-wormhole');

module.exports = class ImageStore extends Controller {
    // export default class ImageStore extends Controller {
    /**
     * 上传图片
     */
    async uploadImages() {
        // const { ctx, service, app, config } = this;
        const { ctx, service, app } = this;

        // const { userid } = ctx.state.user;
        const userid = 'ys'

        const { foreignKey, sourceType, } = ctx.request.body;
        if (!foreignKey || !sourceType) {
            ctx.body = this.ctx.helper.getInfo(7011);
            return;
        }

        const files = ctx.request['files'];

        // const uploadRes = await ossUpload.ossUploadFiles(ctx.oss, config.oss.dirOfBucket, files);
        // console.log('uploadRAes', uploadRes)
        // await ctx.cleanupRequestFiles();

        const records = files.map(async (file, i, arr) => {
            console.log(app.baseDir , ctx.helper.CONSTANT.TMP_IMAGES_PATH, file.filepath)
            /** 图片存储位置相对路径 */
            const storePath = path.relative(app.baseDir + ctx.helper.CONSTANT.TMP_IMAGES_PATH, file.filepath);
            console.log(storePath)
            const url = ctx.helper.CONSTANT.LOCALHOST + storePath;
            console.log('url', url)
            /**
             * 移动文件位置
             */
            const newPath = path.join(app.baseDir, ctx.helper.CONSTANT.STORE_IMAGES_PATH, storePath);
            //移动文件并获取大小
            let size = await ctx.helper.fileUtil.renameAndGetSize(ctx.helper.CONSTANT.IMAGE_CRITICAL_SIZE, file.filepath, newPath);

            arr[i].filepath = newPath;// 文件路径替换为新路径

            return ({
                foreignKey,
                sourceType,
                filename: file.filename,
                size,
                url,
                path: newPath,
                creator: userid,
            });
        });

        try {
            ctx.body = ctx.helper.getInfo(200, null,
                await service.imageStoreSvc.bulkCreate(await Promise.all(records)));
        } catch (err) {
            console.error('err', err)
            files.forEach(async file => {
                if (await ctx.helper.exists(file.filepath)) {//这里的文件路径已经替换为新路径
                    promises.unlink(file.filepath)
                }
            });
            ctx.body = ctx.helper.getInfo(5003);
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
    /**
     * 流模式单文件上传，text 的类型数据没找到
     */
    async uploadStreamImage() {
        const { ctx, app } = this;
        const { text } = ctx.request.body;
        console.log('text', ctx.request.body)
        const stream = await ctx.getFileStream({ requireFile: false });
        if (stream.filename) {
            const filename = path.basename(stream.filename);
            const fileUtil = ctx.helper.fileUtil;
            const filePath = await fileUtil.makeFilePath(app.baseDir + `/images`, filename);
            stream.pipe(fs.createWriteStream(filePath));
        } else {
            // must consume the empty stream
            await sendToWormhole(stream);
        }
        ctx.body = {
            name: stream.filename,
            fields: stream.fieldname,
        };
    }
    /**
     * 流模式多文件上传，因为无法做到在保存文件前获取文件大小，暂时放弃了😂，
     * 但是在严格控制文件类型时可以使用
     */
    async uploadStreamImages() {
        const { ctx, app } = this;
        const parts = ctx.multipart();// 数据流，包含所有提交数据

        let part;
        let partArray = [];
        let params = {};
        let i = 0;
        while ((part = await parts()) != null) {// 依次处理
            if (part.length) {//字符串形式
                params[part[0]] = part[1];
            } else {//文件形式
                if (!part.filename) {
                    await sendToWormhole(part);// 处理未选择文件流，类似Linux命令 stream>/dev/null 
                    continue;
                }
                console.log('part', part)
                partArray.push(part);
                const filename = path.basename(part.filename);
                const fileUtil = ctx.helper.fileUtil;
                const filePath = await fileUtil.makeFilePath(app.baseDir + `/images`, filename);
                part.pipe(fs.createWriteStream(filePath));
            }
        }

        ctx.body = { ha: 'ha' }
    }
}