
// while(SOMETHING THAT COMES OUT TO TRUE OR FALSE) {

// }


// i = 3

let i = 0
while (i < 3) {
    alert("Here's a cat!")
    i++
}
alert("You have enough!")
alert(i)

// for (let i = 0; i < NUMBEROFTIMESTOLOOP; i++) {

// }


// i = 0

for (let i = 0; i < 3; i++) {
    alert("Here's a cat!")
    console.log(i) // 0 then 1 then 2
}

alert("You have enough!")




// total = 15
// i = 6
// console: 1, 2, 3, 4, 5

let total = 0

let stopAt = prompt("What number should I stop at?")

for (let i = 1; i <= stopAt; i++) {
    total += i; // total = total + i
    console.log(i) // 1 then 2 then 3 then 4 then 5
}

alert("The total is " + total)





function fibonacciEvenNumbers(numberOfNumbers) {
    let previousNumber = 0;
    let currentNumber = 1;
    let count = 0;
    while (count < numberOfNumbers) {
        if (previousNumber % 2 === 0) {
            console.log(previousNumber);
        }
        let temp = previousNumber + currentNumber;
        previousNumber = currentNumber;
        currentNumber = temp;
        count++;
    }
}






function fibonacciIsNumberPartOf(numberToCheck) {
    let a = 0;
    let b = 1;
    while (b <= numberToCheck) {
        if (b === numberToCheck) {
            alert("Yes!")
            return
        }
        let temp = a + b;
        a = b;
        b = temp;
    }
    alert("No!")
}




// Global Variable = free spirit that exists everywhere, info available to all
let number = 5
// The name "Hitler" = ruined forever not a normal anymore
// If you make a global variable that name is a little bit ruined forever
// or a nicer metaphor, is invasive species
// You know it's global if it's not inside any curly brackets or parenthesis of a function or loop



// scope = programmy word for context
// What defines the context? Curly brackets



function sayHi(myName) {
    let something = 3
    let dsfdsfds = 3
    return something
}

const mySpecialThing = sayHi("Natalie")

// parameters and return are like little slots in and out of the scope of the function




let fruits = ["apple", "banana", "peach"]
fruits[1] += " pepper" // fruits[1] = fruits[1] + " pepper" -----> fruits[1] = "banana pepper"

fruits.push("strawberry")

// This is not great
let fruitToAdd = ""
do {
    fruitToAdd = prompt("What fruit do you want to add?")
    fruits.push(fruitToAdd)
} while(fruitToAdd !== "")

fruits.length // tell you the current length of the array

// Get the last fruit in the array
fruits[fruits.length - 1]


// splice = scissors and tape -> removes and adds things to the middle of a list
// slice = photocopy machine -> makes a copy of some chunk of the array, like a slice of unlimited pizza