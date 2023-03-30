//Create a program that asks the user to enter their name and age. If the user’s age is greater than or equal to 18, display a message to the console that says “Welcome [name], you are an adult”. If the user’s age is less than 18, display a message that says “Sorry [name], you are not yet an adult”.

let whats_your_name = prompt("Enter your name:");
let whats_your_age = prompt("Enter your age:");

if (whats_your_age >= 18) {
  console.log(`Welcome ${whats_your_name}, you are an adult.`);
} else {
  console.log(`Sorry ${whats_your_name}, you are not yet an adult.`);
}