//primitive type 
//7 types
//String
//Number
//Boolean
//NULL
//undefined
//symbol
//bigint
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id===anotherId)
const bigNumber = 345567799987938n


//Refrence type (Non Primitive)

//Array
//Objects
//Functions

const heros = ["shaktiman", "naagraj","doga"]

let myObj={
    name: "ritesh",
    age:22,
}

const myFunction = function(){ //object function datatype
    console.log("Hello World");
}


console.log(typeof bigNumber);


//++++++++++++++++++++++++++++++++++++++

//  Stack(Primitive),Heap(Non-primitive)

let myNickName = "Gola"

let anotherName = myNickName
anotherName = "ritesh"

console.log(myNickName)
console.log(anotherName)

let userOne = {
    email:"rk@google.com",
    upi: "user@ybl"
}
 
let userTwo = userOne
userTwo.email = "golu@google.com"

console.log(userTwo)
console.log(userOne)



