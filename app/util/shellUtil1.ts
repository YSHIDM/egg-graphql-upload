import { execFile,exec } from 'child_process';
// import { promisify } from 'util';
// import { pipeline } from 'stream';
import * as fs from 'fs';

module.exports = {
  /**
   *
   * @param file 文件名
   * @param args shell 脚本参数
   */
  execFile: async (file: string, args: string[]) => {
    const result = execFile(file, args);
    if(result.stderr){
      result.stderr.pipe(fs.createWriteStream('test2.txt'))
    }
    if(result.stdout){
      result.stdout.pipe(fs.createWriteStream('test.txt'))
    }

    // try {

    //   const result = await promisify(execFile)(file, args)
    //   return result;
    // } catch (error) {
    //   return error
    // }
  },
  exec:async (cmd)=>{
    const result = exec(cmd);
    if(result.stderr){
      result.stderr.pipe(fs.createWriteStream('test2.txt'))
    }
    if(result.stdout){
      result.stdout.pipe(fs.createWriteStream('test.txt'))
    }
  }
};