// Using Node.js, write a Node.js script that uses the Node.js Path Module and the Node.js File System Module with
// asynchronous methods to perform the following operations for the path FSD-mern/path.txt
// Extract the directory name from the given file path using the Path module.
// Create the extracted directory inside an existing folder using the asynchronous methods of the fs module.
// Extract the file name from the given path using the Path module.
// Create a file with the extracted file name inside the newly created directory and write some data into it.
// Copy the contents of this file to another file using an asynchronous file operation.
// Delete the original file after successfully copying the content.
var pm=require("path")
var fs=require("fs")
dir=pm.dirname("FSD-mern/path2.txt")
fs.mkdir(dir,(err)=>{
    if(err) throw err;
    console.log("Directory created")

    file=pm.basename("FSD-mern/path2.txt")
    
    fs.writeFile(dir+"/"+file,"Path Module + FS Module Combine task",(err)=>
    {
        if (err) throw err;
        console.log("File Created")
        fs.copyFile(dir+"/"+file,dir+"/path2_copy.txt",(err)=>{
            if(err) throw err;
            console.log("File copied")

            fs.unlink(dir+"/"+file,(err)=>{
                if (err) throw err;
                console.log("File deleted")
            })
        })

    })
})

