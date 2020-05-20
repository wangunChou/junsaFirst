// var http = require("http");

// // 引入文件操作模块
// var fs=require("fs");

// var server = http.createServer();

// server.on("request", function (req, res) {
//     console.log(req.url);
//     // 判断请求的url是否为'index.html',如果为index,则读取服务器端index.html中的内容,并返回
//     if (req.url === "/index.html") {
//         console.log(req.url);
//         // fs的readFlie提供的三个参数,第一个参数为服务器文件的路径,第二个参数为可选参数,用于设置读取文件
//         // 的编码方式,第三个参数为读取文件的回调函数,用于对读取的文件内容后做后续处理
//         fs.readFile("./index.html", "utf8", function (err, data) {
//             // 对文件操作的回调函数中,首先需要处理可能发生的异常,才能进行后续的操作
//             if (err) {
//                 console.log("read error");
//                 return;
//             }
//             res.end(data);
//             // 上面  res.end(data);等价于 res.write(data);res.end();
//             // 将结果写入响应报文对象,写入之后,关闭。如果写入少量数据,可以使用res.end(data);
//         })
//         // link中引入的css文件和img文件,请求的路径标识中都包含'public'
//     } else if (req.url.indexOf("/public") != -1) {
//         // 因为req.url的路径为绝对定位/public...,而读取服务器public文件夹的路径为当前路径,需要拼接"."
//         fs.readFile("." + req.url, function (err, data) {
//             // 对文件操作的回调函数中,首先需要处理可能发生的异常,才能进行后续的操作
//             if (err) {
//                 console.log("read error");
//                 return;
//             }
//             res.end(data);
//             // 上面  res.end(data);等价于 res.write(data);res.end();
//             // 将结果写入响应报文对象,写入之后,关闭。如果写入少量数据,可以使用res.end(data);
//         })
//     }else{
//         res.end("404");
//     }
// })

// server.listen(3000,function(){
//     console.log("running");
// })

var http = require("http");

var querystring = require("querystring");

http.createServer(function (req, res) {

    var str = ""; //  on()  在这个里面相当于事件，我们可以这样理解    data 事件    end 事件

    req.on("data", function (data) { // 我们想要 得到 post 请求的数据，我们要用 on()  参数一：data ，参数二：回调函数；回调函数 data ，我们便能得到参数

        str += data;

    })

    req.on("end", function () { // 我们请求完数据 调用这个方法 我们 调用 on() 参数一：end，参数二：回调函数，我们在这里，便能得到完整的数据

        var post = querystring(str);

        console.log(post);

    })

}).listen(8080)