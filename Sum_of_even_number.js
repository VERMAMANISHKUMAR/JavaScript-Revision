//Q You are tasked with creating a program that calculates the sum of even numbers up to a given limit. Write a JavaScript function using a for loop that takes a positive integer as input and returns the sum of all even numbers from 1 up to that integer.

function sumOfEvenNumbers(limit) {
          let result = 0;
      
          // Use a for loop to iterate from 1 up to the given integer (inclusive)
          for (let i = 1; i <= limit; i++) {
              // Check if the current number is even
              if (i % 2 === 0) {
                  // Add the even number to the result
                  result += i;
              }
          }
      
          return result;
      }
      
      // Test Case
      console.log(sumOfEvenNumbers(6)); // Expected Output: 12
      