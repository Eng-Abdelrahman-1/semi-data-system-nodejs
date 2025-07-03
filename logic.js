const fs = require("fs")
const { json } = require("stream/consumers")

const adding = (id, fname, lname, age, city)=>{
    const dataObj = loadData()
    const repeatedData = dataObj.filter((obj)=>{
        return obj.id === id
    })
    if(repeatedData.length == 0){
        dataObj.push({
            id: id,
            fname: fname,
            lname: lname,
            age: age,
            city: city
        })
        saveData(dataObj)
        console.log("Data added successfully.");
    }
    else{
        console.log("Error Repeated Id")
    }
}

const deletingAllData = ()=>{
    saveData([])
    console.log("You Have Succusfully Deleted All Data")
}

const deleting = (id)=>{
    const dataObj = loadData()
    const filteredData = dataObj.filter((obj) => {
        return obj.id !== id
    });
    if(filteredData.length < dataObj.length){
       console.log(`You Have Successfully Deleted The Data Of This Id: ${id}`)
        saveData(filteredData)
    }
    else{
        console.log(`There Is No Data For This Id: ${id}`)
    }
}

const viewAllData = ()=>{
    const dataObj = loadData()
    if(dataObj.length){
        console.log(dataObj)
    }
    else{
        console.log("There Is No Data To View")
    }
}

const view = (id)=>{
    const dataObj = loadData()
    const person = dataObj.find((obj) => {
        return obj.id === id
    })
    if(person){
        console.log(`The Data Of This Id ${id} Is:`)
        console.log(person.fname, person.lname, person.city)
    }
 else{
        console.log(`There Is No Data For This Id: ${id}`)
    }
}

function loadData(){
try{
   const allData = fs.readFileSync("Data.json").toString()
   return JSON.parse(allData)
}
catch{
    return []
}
}

function saveData(dataObj){
allData = JSON.stringify(dataObj)
fs.writeFileSync("Data.json", allData)
}

module.exports = {
    adding,
    deletingAllData,
    deleting,
    viewAllData,
    view
}