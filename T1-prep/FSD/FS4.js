// Write node js script and json to perform below tasks. 
// 1.	Write below object in txt file named input.txt  
// {data:{a:15,b:20,c:[40,30]}}
// 2.	Read data from the same file and perform the below tasks.
// a.	addition of a and b.
// b.	subtraction of 2nd element of c and b. (Must be positive value)
// c.	multiplication of elements of c.
// 3.	Add the Output of addition, subtraction and multiplication below the object in output.txt file.
var fs=require("fs")
fs.writeFileSync("Fs4.txt",JSON.stringify({data:{a:15,b:20,c:[40,30]}}))
d=JSON.parse(fs.readFileSync("Fs4.txt","utf-8"))
var add=d.data.a+d.data.b
var sub=d.data.c[1]-d.data.b
var mul=d.data.c[0]*d.data.c[1]
fs.appendFileSync("Fs4_o.txt",`Addition=${add}`)
fs.appendFileSync("Fs4_o.txt",`\nSubtraction=${sub}`)
fs.appendFileSync("Fs4_o.txt",`\nMultiplication=${mul}`)
dd=fs.readFileSync("Fs4_o.txt","utf-8")
console.log(dd)
