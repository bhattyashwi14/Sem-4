// Write a Node.js script that uses the URL module to extract values from the following URL:
// https://abc.com/data.txt?m1=Congrats&m2=Node+Test&m3=Best#Done.
// The program should fetch the file name from the URL, create a file with that name, and write the following content into the file using the values from the URL:
// Congrats!
// Node Test  
// #Done
// Hint: File name can fetched from pathname.split("/").pop() or pathname.split("/")[1] or use "."+pathname approch

const url=require("url")
const fs=require("fs")
const addr="https://abc.com/data.txt?m1=Congrats&m2=Node+Test&m3=Best#Done"

var q=url.parse(addr,true)
var file="."+q.pathname
var data=q.query.m1+"!"+"\n"+q.query.m2+"\n"+q.hash

fs.writeFileSync(file,data)
console.log("File created")
console.log(fs.readFileSync(file,"utf-8"))
