// Write node js script to perform tasks as asked.
// 1)      Create one page with two links (Home(/) and about(/about)).
// 2)      Both pages must contain HTML type content and add required content on both the pages.
// 3)      If user add any other URL path, then he/she will be redirected to page and plain message will 
// be displayed of “Page not found”.
const http=require("http")
http.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.writeHead(200,{"Content-Type":"text/HTML"})
        res.write(`<a href='/home'>Go To Home</a>`)
        res.write(`<br><a href='/about'>Go To About</a>`)
        res.end()
    }

    else if(req.url==="/home")
    {
        res.writeHead(200,{"Content-Type":"text/HTML"})
        res.write(`<h1 style="color:blue;">HOME PAGE</h1>`)
        res.write(`<a href='/about'>Go To About</a>`)
        res.end()
    }
    else if(req.url==="/about")
    {
        res.writeHead(200,{"Content-Type":"text/HTML"})
        res.write(`<h1 style="color:red;">ABOUT PAGE</h1>`)
        res.write(`<a href='/home'>Go To Home</a>`)
        res.end()
    }
    else
    {
        res.writeHead(404,{"Content-Type":"text/plain"})
        res.write("PAGE NOT FOUND")
        res.end()
    }

}).listen(8180)