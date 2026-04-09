// Create JSON object which contains array of objects. Calculate perimeter of square and perimeter of circle by using 
// side value and diameter value respectively. And object as well as calculated  data in shape.txt	
// const shape=[{name:"circle",diameter:8},{name:"square",side:10}]
var fs=require("fs")
const shape=[{name:"circle",diameter:8},{name:"square",side:10}]
fs.writeFileSync("Fs3.txt",JSON.stringify(shape))
data=JSON.parse(fs.readFileSync("Fs3.txt","utf-8"))
var peri=data[1].side*4
var cir=2*3.14*data[0].diameter/2
fs.appendFileSync("Fs3.txt",`\nPerimeter of Square is ${peri}`)
fs.appendFileSync("Fs3.txt",`\nCircumference of circle is ${cir}`)
console.log()
d=fs.readFileSync("Fs3.txt","utf-8")
console.log(d)
