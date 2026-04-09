// Write a nodeJS script to fire an event named calculate which calculates the total marks of 5 subjects about of 25 marks
// and displays the total marks on console as an output.The calculate event fires another event name percentage which takes 
// total marks as argument and percentage should get displayed in console.
const EventEmitter=require("events")
const e=new EventEmitter()
e.on("calculate",(m1,m2,m3,m4,m5)=>{
    total=m1+m2+m3+m4+m5
    console.log(`Total=${total}`)
    e.emit("percentage",total)
})

e.on("percentage",(total)=>{
    per=(total/125)*100
    console.log(`Percentage=${per}`)
})

e.emit("calculate",22,22,11,25,25)
