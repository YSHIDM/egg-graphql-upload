const fileUtil = require('../util/fileUtil');
const CONSTANT = require('../util/constant');
const resInfo = require('../util/resInfo');
const helper = {};
Object.assign(helper, { fileUtil });
Object.assign(helper, {CONSTANT});
Object.assign(helper, resInfo);
module.exports = helper;
