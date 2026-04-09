// Write a nodejs script to print query string of url on console as well as on file using ES6 callback.
const addr="http://localhost:8180/?name=Yashwi&course=FSD&marks=25"
const url=require("url")
const fs=require("fs")

var q=url.parse(addr,true)

    
fs.writeFile("Url3.txt",JSON.stringify(q.query),(err)=>{
    if (err) throw err;
    console.log(q.query);
})
