const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize'
const request_token_url = 'https://github.com/login/oauth/access_token'
const SCOPE = 'user'

let client_id, client_secret
if (process.env.NODE_ENV == 'development') {
    client_id = 'c4cde05e8ea'
    client_secret = '74fe463580' // fake data
} else {
    client_id = '30d8260b4b7f2'
    client_secret = 'dc80e97642c48703' // fake data
}

module.exports = {
    github: {
        client_id,
        client_secret,
        request_token_url
    },
    GITHUB_OAUTH_URL,
    OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${client_id}&scope=${SCOPE}`
}

// 流程
// 1. 注册 OAuth APP的应用
// 2. 保存client_id client_secret
// 3. 访问GET: https://github.com/login/oauth/authorize?client_id=c4cde05e70eea&scope=user
// 4. 跳转 http://localhost:3000/auth?code=8b309c4c403f95 保存 code 字段
// 5. https://github.com/login/oauth/access_token POST请求 body:{client_id,client_secret,code} 获取token
// 6. https://api/github.com/user POST请求：  body:{client_id,client_secret} header: {Authorization: token token}