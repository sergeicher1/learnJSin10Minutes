// 1. Variables and Constants
// Variables can be updated, while constants cannot.

let score = 10; // Initialize a variable
const maxScore = 100; // Initialize a constant
score = 20; // Update the variable 

// 2. Functions 
// Functions are reusable blocks of code that perform a specific task.

function multiply(a,b){
    return a * b; // Multiply two numbers
}

const add = (a, b) => a + b ; // Arrow function to add 2 numbers

// 3. Arrays 
// Arrays are collections of items stored in a single variable.
let fruits = ["apple", "banana", "cherry"]; // Initialize an array
fruits.push("orange"); // Add an item to the array


// 4. Objects
// Objects store related data and functions as key-value pairs.
let car = {
    brand: "Tesla", // Object property
    model: "Model S", // Object property
    start: () => "Car started!", // Object method
}


// 5. Loops 
// Loops allow repeated execution of code for each item in an array.
let numbers = [1,2,3,4]; // Initialize an array of numbers
numbers.forEach((num) =>{
    // Iterate over each number
    console.log(`Number: ${num}`); // Log each number
})

// 6. Conditional statements
// Conditional statements execute code based on a condition.
let age = 18 ;  // Age to check 
if (age >= 18){
    console.log("You can vote!") // Condition is true

}else{
    console.log("You cannot vote.") // Condition is false
}

// 7. DOM Manipulation
// DOM Manipulation allows dynamic changes to HTML and CSS.
document.body.style.background = "lightblue"; // Update the background color dynamically

// 8. Event Listeners
// Event listeners respond to user actions on the page.
document.addEventListener("click", () =>{
    console.log("Page clicked!"); // Log a message when the page is clicked
})

// 9. Fetch API 
// The Fetch API is used to make HTTP requests to fetch data from a server.
fetch("https://api.github.com/users")// Fetch user data from GitHub
    .then((response) => response.json()) // Parse the JSON response
    .then((data) => {
        const users = data.slice(0, 3).map((u) => u.login); // Extract the first three user logins
        console.log(`Fetched Users: ${users.join(", ")}`); // Log the fetched users

    }). catch((error) => {
        console.log(`Fetch API Error: ${error}`)// Log any errors
    })