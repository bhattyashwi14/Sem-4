// Write a Node.js program that uses the URL module to parse query parameters from the following URL:
// http://localhost:3000/?name=yen&course=NodeJS. 
// The server should extract the values of name and course and display them in the browser response.
const url=require("url")
const http=require("http")
 
http.createServer((req,res)=>{
    var q=url.parse(req.url,true)
    var name=q.query.name
    var course=q.query.course

    res.writeHead(200,{"Content-Type":"text/plain"})
    res.write(`Name:${name}\nCourse:${course}`)
    res.end()
}).listen(3000)