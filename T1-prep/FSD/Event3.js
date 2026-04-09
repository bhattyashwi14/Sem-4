// Write a node js script to write the text “This is data” to new.txt file. After that append the text “that is data” 
// to same ne .txt file. After that read the file and print file concept on console. After finishing read operation, 
// print the line “Thanks for using my program” on console. All read/write operations are asynchronous. (using Event)

const fs=require("fs")
const e=require("events")
ee=new e.EventEmitter()

ee.on("Create_file",()=>{
    fs.writeFile("Event3.txt","This is data",(err)=>{
        if (err) throw err;
        console.log("File created")

         ee.emit("Update_file")
    })
})

ee.on("Update_file",()=>{
    fs.appendFile("Event3.txt","\nthat is data",(err)=>{
        if (err) throw err;
        console.log("File Updated")

        ee.emit("Read_file")
    })
})

ee.on("Read_file",()=>{
    fs.readFile("Event3.txt","utf-8",(err,data)=>{
        if (err) throw err;
        console.log(data)

        console.log("Thanks for using my program")
    })
})

ee.emit("Create_file")