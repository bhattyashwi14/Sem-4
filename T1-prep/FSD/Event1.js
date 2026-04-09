// Write a Node.js program using the events module to simulate a sequence of events: 
// When a "connection" event occurs, print "Connection successfully" and trigger a "data-received" event.
// When the "data-received" event occurs, print "Data received successfully".
// Finally, print "Thanks" at the end of execution.
ee=require("events")
e=new ee.EventEmitter()

e.on("connection",()=>{console.log("Connection successfully")
    e.emit("data-received")
})

e.on("data-received",()=>{
    console.log("Data Received successfully")
})

e.emit("connection")

console.log("Thanks")
