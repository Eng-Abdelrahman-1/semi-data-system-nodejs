const fs = require("fs")
const { type } = require("os")
const yargs = require("yargs")
const logic = require("./logic")

yargs.command({
command: "add",
describe: "to add data",
builder: {
id:{
    describe: "Please Enter Your Id",
    demandOption: true,
    type: "string"
},
fname:{
    describe: "Please Enter Your First Name",
    demandOption: true,
    type: "string"
},
lname:{
    describe: "Please Enter Your Last Name",
    demandOption: true,
    type: "string"
},
age:{
    describe: "Please Enter Your Age",
    demandOption: true,
    type: "string"
},
city:{
    describe: "Please Enter Your City",
    demandOption: true,
    type: "string"
},
},
handler: (x)=>{
    logic.adding(x.id, x.fname, x.lname, x.age, x.city)
}
})

yargs.command({
    command: "deleteAll",
    describe: "to delete all data",
    builder: {
    id:{
    describe: "Please Enter The Id",
    demandOption: false,
    type: "string"
}
},
handler: ()=>{
    logic.deletingAllData()
}
})

yargs.command({
    command: "delete",
    describe: "to delete specific data",
    builder: {
    id:{    
    describe: "Please Enter The Id",
    demandOption: true,
    type: "string"
}
},
handler: (x)=>{
    logic.deleting(x.id)
}
})

yargs.command({
    command: "viewAll",
    describe: "to view all data",
    builder: {
    id:{
    describe: "Please Enter The Id",
    demandOption: false,
    type: "string"
}
},
handler: ()=>{
    logic.viewAllData()
}
})

yargs.command({
    command: "view",
    describe: "to view specific data",
    builder: {
    id:{
    describe: "Please Enter The Id",
    demandOption: true,
    type: "string"
}
},
handler: (x)=>{
    logic.view(x.id)
}
})

yargs.argv