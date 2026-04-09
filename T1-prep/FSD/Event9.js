// Write a node.js script using Event handling to perform following tasks in sequence:
// Create a folder named Test.
// Create file in it named abc.txt and enter data into it.Append data to that file abc.txt and print message 
// “Data Appended Successfully”.
// Read the content of the file abc.txt and print the concsole (Ref*- content on http web server).
// Copy data from abc.txt to pqr.txt.
// Delete old file and Lastly print the message “All operations performed successfully” on console.
// Perform using Synchronous file system module.

const EventEmitter=require("events")
const e=new EventEmitter()

const fs=require("fs")

e.on("FileSystem",()=>{
    fs.mkdirSync("Event9")
    console.log("Folder created")

    fs.writeFileSync("Event9/event9.txt","File Created inside the folderrrrrrrrrrr")
    console.log("File created")

    fs.appendFileSync("Event9/event9.txt","\nAppending dataaaaaaaaaaaaaaaaa")
    console.log("Data Appended Successfully")

    console.log(fs.readFileSync("Event9/event9.txt","utf-8"))

    fs.copyFileSync("Event9/event9.txt","Event9/event9_copy.txt")
    console.log("Copies the file")

    fs.unlinkSync("Event9/event9.txt")
    console.log("Old file Deleted")

    console.log("All operations performed successfully")
})

e.emit("FileSystem")