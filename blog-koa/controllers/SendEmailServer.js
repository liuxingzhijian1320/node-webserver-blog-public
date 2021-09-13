const Utils = require('../scripts/utils')
const nodemailer = require("nodemailer");
const { NODEMAILER } = require('../config')

class ArticleComment {
    /**
     *
     * @param {* ctxx} ctx
     * @param {* 子级数据} data
     * @param {* 父级数据} pdata
     */
    static async email(ctx, data, pdata) {

        try {
            // 二级评论(pid>0) &&  正确的邮箱格式
            if (data.pid > 0 && Utils.RegExpEmail(pdata.email)) {
                // var text = `${data.username} 回复您：[${data.content}] 具体详见博客(PC浏览，不支持移动预览)：http://www.zhooson.cn/article/detail?id=${data.aid}`
                const website = `http://www.zhooson.cn/article/detail?id=${data.aid}`
                var html = `
                    <h3>回复提醒</h3>
                    <p>${data.username} 回复您：${data.content}</p>
                    <p>具体详见博客(PC浏览，不支持移动预览)：<a href=${website} target="_blank">传送门</a></p>
                `
                    // Use Smtp Protocol to send Email
                var transporter = nodemailer.createTransport({
                    //node_modules/nodemailer/well-known/services.json 支持列表
                    host: 'smtp.qq.com',
                    port: 465, // SMTP 端口
                    secure: true,
                    auth: {
                        user: NODEMAILER.email,
                        //这里密码不是qq密码，是你设置的smtp密码（授权码）
                        pass: NODEMAILER.pass
                    }
                });

                // setup e-mail data with unicode symbols
                var mailOptions = {
                    to: pdata.email, // 接受者
                    from: "8616@qq.com", // 这里的from和上面的user 账号一样的
                    subject: '回复提醒', // 标题
                    //text和html两者只支持一种
                    // text: text, // 标题
                    html: html // html 内容
                };

                transporter.sendMail(mailOptions, function(error, info) {
                    if (error) {
                        return console.log(error);
                    }
                    // console.log('Message sent: ' + info.response);
                    console.info('邮箱发送成功')
                    transporter.close();
                });

            } else {
                console.info('评论通过，但是邮箱不正确')
            }
        } catch (err) {
            console.info(err)
        }


    }
}


module.exports = ArticleComment;