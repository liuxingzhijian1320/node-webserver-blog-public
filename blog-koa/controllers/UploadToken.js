const qiniu = require('qiniu')

const ACCESS_KEY = "38FtawX_rMbXf4UmBH0UE01N6Epferue";
const SECRET_KEY = "6AdlTvx7094h8ppAQMo5c48TMPNSJRhg";

class UploadToken {
    // 获取七牛上传token
    static async token(ctx) {
        try {
            let mac = await new qiniu.auth.digest.Mac(ACCESS_KEY, SECRET_KEY);

            let options = {
                scope: "storefiles",
                expires: 7200
            };
            let putPolicy = await new qiniu.rs.PutPolicy(options);
            let uploadToken = await putPolicy.uploadToken(mac);

            ctx.response.status = 200;
            ctx.body = {
                code: 200,
                message: `获取上传token成功！`,
                data: {
                    token: uploadToken
                }
            }

        } catch (err) {
            ctx.response.status = 500;
            ctx.body = {
                code: 500,
                message: `获取token失败！`,
                data: err
            }

        }
    }
}


module.exports = UploadToken