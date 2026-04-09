// Create HTTP webpage on which home page display “Home page”, student page shows “Student page” and any other page 
// shows “Page Not found”.    (Render Response & Routing)

const http=require("http")
http.createServer((req,res)=>{
    if(req.url==="/" || req.url==="/home")
    {
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.write("HOME PAGE")
        res.end()
    }
    else if(req.url==="/student")
    {
        res.writeHead(200,{"Content-Type":"text/plain"})
        res.write("STUDENT PAGE")
        res.end()
    }
    else
    {
        res.writeHead(404,{"Content-Type":"text/plain"})
        res.write("PAGE NOT FOUND")
        res.end()
    }

}).listen(8180)