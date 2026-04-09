// Write a Node.Js program for following action 

// Write a file having five numbers in array form separated by white space in .txt file.

// Append sorted array of these 5 numbers in same file along with message: “Sorted array:” in new line.

// Find maximum number from that and append with message “maximum number=” in same file. 
var fs=require("fs")
fs.writeFileSync("Fs5.txt","1 -9 20 33 50")
data=fs.readFileSync("Fs5.txt","utf-8")
d=data.split(" ")
d.sort()
for(i in d)
{
    d[i]=parseInt(d[i])
}
fs.appendFileSync("Fs5.txt",`\nSorted array:${d}`)
fs.appendFileSync("Fs5.txt",`\nMaximum Number:${d[d.length-1]}`)
dd=fs.readFileSync("Fs5.txt","utf-8")
console.log(dd)


