//引入express中间件
var express = require('express');
var app = express();

//指定启动服务器到哪个文件夹，我这边指的是dist文件夹
app.use(express.static('./'));

app.listen(1111, function () {
  console.info('复制打开浏览器');
});
