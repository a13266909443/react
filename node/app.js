const http = require('http'); // http 模块
const url = require('url'); // url 模块
const tools = require('./module/tools'); // 自定义模块
const fs = require('fs')
const path = require('path')
const mime = require('mime');
/*
    req 获取客户端传入的URL信息
    res 给浏览器用户信息
    
    // 热更新、用来代替node指令启动 
    supoervisor xx.js
    nodemon xx.js 

    //模块
    1、核心模块
    2、自定义模块（文件模块）
*/

// 生成http
http.createServer((req, res) => {
    

    

    // console.log(tools)
    // 自定义模块使用
    // var api = tools.formatApi('course/defult')
    // res.write(api)


    let pathname = url.parse(req.url).pathname
    pathname = pathname == '/' ? '/index.html' : pathname
    // 获取后缀名
    let extname = path.extname(pathname)  

    // 获取不同类型的text
    // let textType = tools.getMime(extname) 
    let textType = mime.lookup(extname)
    console.log(textType)
    if(req.url != '/favicon.ico'){
        fs.readFile('../build/' + pathname, (err, data) => {
            if(err){
                // 设置响应头 
                res.writeHead(404,{"Content-type":"text/html;charset='utf-8'"})
                res.write("<head><meta charset='utf-8'></head>")
                res.end('404这个页面不存在')  // 结束响应
                return
            }
            res.writeHead(200, {"Content-type":textType+";charset='utf-8'"})
            res.write("<head><meta charset='utf-8'></head>")

            res.end(data)  // 结束响应 
        })
    }
}).listen(8081); 