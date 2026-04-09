// Write a Node.js program using the HTTP module to create a server that sends a JSON response when the user visits the /api route.
// The JSON object should contain:name as "Rahul", course as "NodeJS",status as "Enrolled"Set the appropriate header for JSON data 
// and display "404 – Page Not Found" for any other route.
const http=require("http")
http.createServer((req,res)=>{
    if(req.url==="/")
    {
        res.writeHead(200,{"Content-Type":"text/HTML"})
        res.write(`<h1>Welcome to Home Page</h1>`)
        res.end()
    }

    else if(req.url==="/api")
    {
        res.writeHead(200,{"Content-Type":"application/json"})
        var obj={"name":"Rahul","course":"NodeJS","status":"Enrolled"}
        res.write(JSON.stringify(obj))
        res.end()
    }
    else
    {
        res.writeHead(404,{"Content-Type":"text/plain"})
        res.write("PAGE NOT FOUND")
        res.end()
    }

}).listen(8180)