'use strict';

const Controller = require('egg').Controller;
const fs = require('fs'); // node的fs文件模块
const path = require('path'); // node的path路径模块
const { cb, formatDate } = require('../../utils');

// 生成新的文件名称
function getUploadFileExt(name) {
  let ext = name.split('.');
  let last = formatDate(new Date(), 'yyyy-mm-dd-HH-mm-ss-ms');
  return `${last}.${ext[ext.length - 1]}`;
}

// 递归创建目录 同步方法
function checkDirExist(dirname) {
  if (fs.existsSync(dirname)) {
    return true;
  } else {
    if (checkDirExist(path.dirname(dirname))) {
      fs.mkdirSync(dirname);
      return true;
    }
  }
}

class FileController extends Controller {
  // 上传图片
  async fileUpload() {
    console.log(111);
    const { ctx } = this;
    try {
      // 1. 获取文件流
      const file = ctx.request.files[0];
      // 2. 生成filename
      const name = getUploadFileExt(file.filename);
      console.log('name', name);
      // 3. 获取bucket ps: demo 或者 demo/test 或者 demo/test/cd
      const { bucket = 'test' } = ctx.request.body;
      // 4. 生成文件夹
      const dir = path.join(__dirname, `../public/images/${bucket}`);
      // console.log('dir', dir);
      checkDirExist(dir);
      // 5. 文件流读取／写入
      const filePath = `${dir}/${name}`;
      let readStream = fs.createReadStream(file.filepath);
      var writeStream = fs.createWriteStream(filePath);
      readStream.pipe(writeStream);
      readStream.on('end', function () {
        fs.unlinkSync(file.filepath);
      });

      // console.log('====================================');
      // console.log(234234234, ctx.request);
      // console.log('====================================');

      // 正式库
      if (ctx.request.header.host === 'admin.zhooson.cn') {
        cb(ctx, 200, 200, '上传成功', {
          url: `https://xxxxxxxxxxx/public/images/${bucket}/${name}`,
        });
      } else {
        cb(ctx, 200, 200, '上传成功', {
          url: `http://${ctx.request.header.host}/public/images/${bucket}/${name}`,
        });
      }
    } catch (err) {
      cb(ctx, 200, 500, '上传失败！', JSON.stringify(err));
    }
  }
}

module.exports = FileController;
