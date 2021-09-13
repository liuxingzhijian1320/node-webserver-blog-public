const fs = require('fs');
const path = require('path');
const { timeFormat } = require('../utils')


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
// 生成新的文件名称
function getUploadFileExt(name) {
    let ext = name.split('.');
    let first = name.replace(ext[ext.length - 1], '');
    let last = timeFormat(new Date(), 'yyyy-mm-dd-HH-mm-ss')
    return `${first}${last}.${ext[ext.length - 1]}`
}

class UploadServer {
    static async upload(ctx) {
        try {
            // 上传单个文件
            const file = ctx.request.files.file; // 获取上传文件
            const { bucket } = ctx.request.body;

            // 创建可读流
            const reader = fs.createReadStream(file.path);
            // console.info('reader', reader)

            // 生成文件夹
            let dir = path.join(__dirname, `../public/upload/${bucket}`);
            checkDirExist(dir)

            // 生成图片文件名字
            let newName = getUploadFileExt(file.name);
            console.info('newName', newName);

            // 文件目录
            let filePath = `${dir}/${newName}`

            // 创建可写流
            const upStream = fs.createWriteStream(filePath);
            // console.info('upStream', upStream)

            // 可读流通过管道写入可写流
            reader.pipe(upStream);
            /**
              //读取文件发生错误事件
              reader.on('error', (err) => {
                  console.log('发生异常:', err);
              });
              //已打开要读取的文件事件
              reader.on('open', (fd) => {
                  console.log('文件已打开:');
              });
              //文件已经就位，可用于读取事件
              reader.on('ready', () => {
                  console.log('文件已准备好..');
              });

              //文件读取中事件·····
              reader.on('data', (chunk) => {
                  console.log('读取文件数据:');
              });

              //文件读取完成事件
              reader.on('end', () => {
                  console.log('读取已完成..');
              });

              //文件已关闭事件
              reader.on('close', () => {
                  console.log('文件已关闭！');
              });

            */

            let urlstr = `${ctx.origin}/upload/${bucket}/${newName}`

            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `上传成功！`,
                data: {
                    url: urlstr,
                    createTime: +new Date()
                }
            };
        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: `上传失败`,
                data: err,
            };
        }

    }
}



module.exports = UploadServer;