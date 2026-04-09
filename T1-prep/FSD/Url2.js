// Write a nodejs program which fetch filename from requested url and print that file’s data on http web server. (Async)
const url=require("url")
const fs=require("fs")
const http=require("http")

http.createServer((req,res)=>{
    let q=url.parse(req.url,true)
    let file="."+q.pathname

    fs.readFile(file,"utf-8",(err,data)=>{
        if (err)
        {
            res.writeHead(404,{"Content-Type":"text/plain"});
            res.write("No Such file found           ")
            res.end()
        } 
        else
        {
            res.writeHead(200,{"Content-Type":"text/plain"});
            res.write(data)
            res.end()
        }
    })
}).listen(8180);


