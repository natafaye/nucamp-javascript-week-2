// let houseDirty = true

// while(houseDirty) {
//     alert("Pick something up!")
//     houseDirty = false
// }

// let peopleAtHouse = prompt("How many people are at your house?")

// for(let i = 0; i < peopleAtHouse; i++) {
//     alert("Make a sandwich!")
// }

// While is good when you don't know how many times you're going to loop when you start
// but you when to stop (or on the flip side when to keep going)

// For loop is good when you know how many times when you start looping

// The skill of reading code (walk through code like a computer would) is a foundational skill

// i = 3
// here's a cat, here's a cat, here's a cat, you have enough

// let i = 0
// while(i < 3) {
//     alert("Here's a cat!")
//     i++
// }
// alert("You have enough!")
// console.log(i)

// i = 3
// here's a cat, here's a cat, here's a cat, you have enough

// for(let i = 0; i < 3; i++) {
//     alert("Here's a cat!")
// }
// alert("You have enough!")


// total = 15 (0, 1, 3, 6, 10, 15)
// i = 6
// 1, 2, 3, 4, 5

// let total = 0

// for(let i = 1; i <= 5; i++) {
//    total += i; // total = total + i
//    console.log(total)
// }

// Should this line of code be in the loop or outside the loop?

//alert("The total is " + total)


function myFunction(parameter1, parameter2) {
    console.log(parameter1)
}

//console.log(parameter1) // ERROR

let fruits = ["apple", "peach", "mango"]
let prices = [1, 7, 3]


// prices = [1, 7, 3]
// prices.length = 3
// total = 11
// i = 3

// let total = 0

// for(let i = 0; i < prices.length; i++) {
//     // i will be each index of the array one by one
//     total += prices[i] // total = total + prices[i]
// }

// console.log("Your total is " + total)




// let total = 0

// for(let i = 0; i < prices.length; i++) {
//     const price = prices[i] // first 1, then 7, then 3
//     // i will be each index of the array one by one
//     total += price// total = total + prices[i]
// }

// console.log("Your total is " + total)



let sum = 0

for (const price of prices) { // price will be 1, then 7, then 3
    // In the background, it does this for you and tracks the i: const price = prices[i]
    sum += price// total = total + price
}

console.log("Your total is " + sum)


for (const price of prices) {
    console.log(price)
}


let message = "You are buying: "

for (const fruit of fruits) {
    message += fruit + " and "
}

console.log(message)


//const random = Math.floor( Math.random() * HOW_MANY_OPTIONS  ) + LOWEST_NUMBER



const addOne = (number) => {
    number + 1
}


addOne(5) // undefined