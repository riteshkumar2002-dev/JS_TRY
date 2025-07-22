//array->object
const myArr = [0,1,2,3,4,5,true,"hitesh"]
//console.log(myArr["one"]) -> not access through this

//array-->shallow copy banti hai access same refrence

//Methods in array
const myHeros = ["Shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[0])

//methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
//myArr.shift();

//console.log(myArr.includes(9))
//console.log(myArr.indexOf(3))


//const newArr = myArr.join() //string will be output return
//console.log(newArr)
//console.log(myArr)

//slice , splice

console.log("A ",myArr)

const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B ",myArr)


const myn2 = myArr.splice(1,3);//refrence change
console.log(myn2)

console.log("S " ,myArr)



