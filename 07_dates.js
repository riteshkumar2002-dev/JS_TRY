//Dates

let myDate = new Date()
//console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(typeof myDate)

let myCreatedDate = new Date(2023,0,23,5,3)
console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()




console.log(myTimeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000));



let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

//`${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long",
})
