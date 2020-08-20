// @ts-ignore
const STATUS_CODE = require('./statusCode')

module.exports = {
  getInfo : ({rescode=0, resmessage='', data=null}) => {
    rescode = rescode || STATUS_CODE.errCode;
    resmessage = resmessage || STATUS_CODE[rescode] || STATUS_CODE.errMsg;
    return { rescode, resmessage, data };
  },
}
