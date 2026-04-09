// Write a nodejs program load a simple html file on nodejs web server and print its content as html content.
const add="file:///FSD/FSD103.html"
const url=require("url")
let q=url.parse(add,true)
console.log(q)
file=q.pathname
console.log(file)
const fs=require("fs")
console.log(fs.readFileSync(file,"utf-8"))
