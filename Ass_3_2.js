//Create a program that prompts the user to enter a number and then checks whether that number is even or odd. Display the result to the user using an alert box.


let checker = prompt("Enter a number:");
if (checker % 2 == 0) {
  alert(checker + " is even.");
} else {
  alert(checker + " is odd.");
}
