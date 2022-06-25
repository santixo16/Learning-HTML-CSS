//INTRODUCTION

console.log('Hello World!');

/*Tipos de datos:
*String: "Hello", 'Hi', "10" (10 is a number but if it's within quotation marks it takes a value of a String)
Boolean: true, false
Null: null (a variable is empty) 
Number: 123, 10, 15, 4.56
undefined: (the variable has not been defined)
Object: Agrupation of data that makes sense
Arrays: (it can contain multiple data types)

DEFINE VARIABLES: 
var: var myFirstVariable="I'm a variable" (it can be use but I don't recommend it, instead use 'let')
let
const
*/

//String:
let myFirstVariable="I'm a variable"
console.log(myFirstVariable); //Prints in the console the value of myFirstVariable

//Re-asigning values:
myFirstVariable="I have changed my value!" //Here, we re-asign the value of myFirstVariable
console.log(myFirstVariable);

//Booleans:
let myBoolean=true
let mySecondBoolean=false

//Numbers:
let myNumber= 0
let myNumber2= 12
let myNumber3= -258

console.log(myNumber, myNumber2, myBoolean, myFirstVariable);

//Undefined:
let undef;
console.log(undef);

//Null:
let nulo=null;
console.log(nulo);

//Empty object:
const emptyObject = {}

//Objects: (these are it's properties)
const myObject = {
    aNumber: 5,
    aString: "I'm a string",
    aCondition: true,
}

console.log(myObject);

//Print a propertie of the object (prints the number 5):
console.log(myObject.aNumber);

//Arrays:
const emptyArr = []
emptyArr.push("I'm new") //Method to add more values to the array
console.log(emptyArr);

const arr = [1, 2, 'Hello', "World"]
arr.push(5) 
arr.push(7) 
arr.push("Cool", 4)
console.log(arr);