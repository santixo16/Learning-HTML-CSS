//FUNCTIONS
function iterar(argument) {
    for (let i = 0; i < argument.length; i++) {
        console.log(argument[i]);
    }
}

const numbers = [1, 2, 3, 4, 5]
const names = ['Pedro', 'Pedro', 'Felipe', 'Chancho', 'Messi']

iterar(numbers)
iterar(names)

function suma(num1, num2) {
     return num1 + num2;
}

const result = suma(5, 6);
const result2 = suma(1, 2);
const result3 = suma(result, result2);

console.log(result3);
//the same as ---> const result3 = console.log(suma(result, result2));

//CALLBACKS-> Function that it's executed at the end of another function
function addition(a, b, cb) {
    const resultado = a + b
    cb(resultado)
}

function callback (resultado){
    console.log('result of the callback function:', resultado);
}

addition(5, 4, callback)

//Fat arrow functions---> They have 2 benefits
//it's not necesary to use function word
//if it only have 1 line of code it's not necessary to use a return value
const myFatArrowFunction = (number1 , number2) => number1 + number2 //the return is there if it has only one line
const answer = console.log('fist way to write an arrow function:', myFatArrowFunction(1, 2))

//Another way to define the fat arrow function
const anotherFat = (number1, number2) => {
    return number1 + number2
}

const respuesta = console.log('second way to write an arrow function:',anotherFat(3, 4))

//Anonymous functions-->funciton that does not have a name

function anonymous(a, b, cb) {
    const resultado = a + b
    cb(resultado)
}

anonymous(4, 2, function (resultado){
    console.log('result of the anonymous function:', resultado);
})