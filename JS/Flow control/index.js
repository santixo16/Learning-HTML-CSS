//Flow control

//if statemenmt
if (true){
    console.log('print the message if the statement if is true');
}

if (false){
    console.log("I wont be displayed");
}

const age = 18

if (age > 5 && age < 18) {
    console.log("The kid can play the game");
}else{
    console.log("The kid cannot play the game");
}

console.log("End of the statement");

//while statement
let x = 0

while (x<=5) {
    console.log(x);
    x++
}

//switch statement
let option = 2

switch (option) {
    case 'a':
        console.log("I'm case 'a'");
        break;
    case 2:
        console.log("I'm case 2");
        break;
    case 3:
        console.log("I'm case 3");
        break;

    default:
        console.log("I'm not a case");
}

//for statement
for (let i = 0; i < 10; i++ ) {
    console.log(i); //This will print the numbers from 0 to 9
}

//Going to the array elements
const numbers = [1, 2, 'Hello', 4, 5] //length property

console.log(numbers[0]); //this will print the number 1 because it's on the length 0 of the array

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

