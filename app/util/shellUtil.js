const { execFile, exec } = require('child_process')
// import { promisify } from 'util';
// import { pipeline } from 'stream';
const fs = require('fs')

module.exports = {
  /**
   *
   * @param file 文件名
   * @param args shell 脚本参数
   */
  execFile: async (file, path) => {
    const result = execFile(file, [path])
    if (result.stderr) {
      result.stderr.pipe(fs.createWriteStream('test2.txt'))
    }
    if (result.stdout) {
      result.stdout.pipe(fs.createWriteStream('test.txt'))
    }

    // try {

    //   const result = await promisify(execFile)(file, args)
    //   return result;
    // } catch (error) {
    //   return error
    // }
  },
  exec: async cmd => {
    const result = exec(cmd)
    if (result.stderr) {
      result.stderr.pipe(fs.createWriteStream('test2.txt'))
    }
    if (result.stdout) {
      result.stdout.pipe(fs.createWriteStream('test.txt'))
    }
  }
}