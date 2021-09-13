    //引入express中间件
    var express = require('express');
    var app = express();

    //指定启动服务器到哪个文件夹，我这边指的是dist文件夹
    app.use(express.static('./dist'));

    // 监听端口为1111
    var server = app.listen(1111, function() {
        console.info('复制打开浏览器: http://localhost:1111');
    });