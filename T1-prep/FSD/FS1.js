// Write a Nodejs script to take "0 1 -9 20 33 -44 50" elements separated by white space in 
// .txt file. Print sorted array of these 5 elements on Node Js server.

var fs=require("fs")
fs.writeFileSync("Fs1.txt","0 1 -9 20 33 -44 50")
data=fs.readFileSync("Fs1.txt","utf-8")
d=data.split(" ")
d.sort()
for(i in d)
{
    d[i]=parseInt(d[i])
}
console.log(d)
