// @ts-ignore
const STATUS_CODE = require('./statusCode');

module.exports = {
    getInfo : (code=0, msg='', obj=null) => {
        const rescode = code || STATUS_CODE['errCode'];
        const resmessage = msg || STATUS_CODE[rescode] || STATUS_CODE['errMsg'];
        return {rescode, resmessage, data: obj};
    }
};
