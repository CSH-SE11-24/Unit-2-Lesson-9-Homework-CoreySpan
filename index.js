// PART 1: printing with prompt
// Prompt the user for a number and cast it to a number
let num = prompt("Enter a number")
parseInt(num)

// Prompt the user for another number that is bigger than the first number and cast it to a number
let newnum = prompt("Enter a bigger number")
parseInt(newnum)

// Write a JavaScript program that uses a for loop to print all numbers from the first number to the second number
for (x = num; x <= newnum; x++){
  console.log(x)
}






// PART 2: Averaging an array
// Create an array of numbers 
let numbers = [1, 2, 3, 4]
let sum = 0
// Write a for loop that calculates the sum of the elements 
for (let x = 0; x < numbers.length; x++) {
  sum += numbers[x]
   console.log(sum)
}





// Using the sum, calculate the average of all the elements (sum divided by the length of the array)
average = sum/numbers.length
console.log("The average of the array is", average)