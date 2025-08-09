let numCats = prompt("How many cats do you have?") // "0"

// numCats = 0
// CONSOLE: 

console.log(numCats) // logs: "0"

// The condition () will keep the loop looping while it's true
while(numCats < 3) {
    alert("That's so sad, you're not a cat lady")
    alert("Here's a cat")
    console.log(numCats) // log three times: 0, 1, 2
    numCats++ // numCats = numCats + 1
    console.log(numCats) // log three times: 1, 2, 3
}

// How many cats?
console.log(numCats) // logs: 3


// guess = "pineapple"

let guess = ""

while(guess !== "pineapple") {
    guess = prompt("Guess!") // type in the prompt: "pineapple"
}

// If you're past the loop the loop condition must be false
// After the loop is almost like the "else" of a loop
alert("You guessed right!")



do {
    guess = prompt("Guess!")
} while(guess !== "pineapple")

alert("You guessed right!")


let i = 0
while(i < 3) {
    alert("Here's a cat!")
    i++
}
alert("You have enough!")


i = 3
ALERT: "Here's a cat!" "Here's a cat!" "Here's a cat"

let i = 0; runs at the beginning ONCE
i < 3; runs BEFORE each iteration (looping)
i++; runs AFTER each iteration (looping)
for(let i = 0; i < 3; i++) {
    alert("Here's a cat!")
    console.log(i) // 0, 1, 2
}
alert("You have enough!")

// For Loop Template
// for(let i = 0; i < NUMBER_OF_TIMES_TO_RUN; i++) {
//     // code to run
// }


total = 15
i = 6

let total = 0
let i

for(i = 1; i <= 5; i++) {
   console.log(i) // 1, 2, 3, 4, 5
   console.log(total) // 0, 1, 3, 6, 10
   total += i; // total = total + i
   console.log(total) // 1, 3, 6, 10, 15
}

console.log(i) // 6
console.log(total) // 15

alert("The total is " + total)



let racers = ["Kyle", "Dawn"]

let loserWhoseASmartHead = racers[racers.length - 1]

let first = racers[0]

let last = racers[racers.length - 1]

// Cheating

// Overwrites
// racers[0] = "Natalie"

// console.log(racers) // ["Natalie", "Dawn"]

// Scoots everybody over
racers.unshift("Natalie")

// \n = the Enter key
alert("Here are the racers: \n" + racers.join("\n  vs  \n"))



let fruits = ["apple", "banana", "peach"]
fruits[1] += "pepper" // fruits[1] = fruits[1] + "pepper"
console.log(fruits) // ["apple", "bananapepper", "peach"]


// someArray.splice(WHERE TO START, HOW MANY TO REMOVE, OPTIONALLY THINGS TO ADD)


let outside = ['🌳', '🐶',  '❄️', '🌿']


const addOne = (number) => {
  number + 1
}


console.log((number) => number + 1)

// Beginner option, CANNOT do this as a professional generally speaking
// let attractionType

function buyTicket() {
    let attractionType = "wave"

    let david = "cool"

    let isAllowed = checkHeight(attractionType)
    // Starts on right hand side of an equals
    // Puts in any variable values
    // Simplifies any operations
    // Calls any functions and simplifies to the return

    if(isAllowed) {
        alert("Come on in!")
    }
}


function checkHeight(attraction) { // let attraction = "wave"
    let david = "very cool"

    let allowed = false
    if(attraction === "wave") {
        allowed = true
    }
    return allowed // Put in any variable values
}

// We can have two variables with the same name in different scopes/blocks/sets of curly brackets