const accountId = 144556;
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState; // if you will not store in variable then it will return undefined
// accountId = 2
//it is not allowed to be done in the datatype of const
console.log(accountId)

accountEmail = "hgc@hv.com"
accountPassword ="123456"
accountCity = "bangalore"

/*
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])