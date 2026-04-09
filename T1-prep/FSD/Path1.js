// Write node.js script to check whether the file extension is  .txt or not.
path=require("path")
p="D:\FSD-2\Fs4_0.text"
pm=path.parse(p)

if (pm.ext==".txt")
{
    console.log("Text File")
}
else
{
    console.log("Not Text file")
}