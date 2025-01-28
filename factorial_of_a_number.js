// QYou are building a program to calculate the factorial of a given positive integer. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n. Write a JavaScript function using a for loop that takes a positive integer as input and returns its factorial.

// Expected Input
// 6
// Expected Output
// 720
// Test Cases
// Use for loop to iterate from 1 up to the given number
// Calculate and store the factorial of the number in answer

function factorial(limit) {
          let result = 1;
      
          // Use a for loop to iterate from 1 up to the given number
          for (let i = 1; i <= limit; i++) {
              // Multiply the current number to the result to calculate factorial
              result *= i;
          }
      
          return result;
      }
      
      // Test Case
      console.log(factorial(6)); // Expected Output: 720
      