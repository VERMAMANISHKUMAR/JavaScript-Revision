//Q Write a javascript program to check if a number is composite or not. A composite number is a natural number or a positive integer that has more than two factors.
function Composite(number) {
          let answer = false;
      
          // Check if the number is greater than 1 (composite numbers must be positive integers)
          if (number > 1) {
              // Loop from 2 to half of the number to check for factors
              for (let i = 2; i <= Math.floor(number / 2); i++) {
                  // If the number is divisible evenly by i, it has more than two factors and is composite
                  if (number % i === 0) {
                      answer = true;
                      break;
                  }
              }
          }
      
          return answer;
      }
      
      // Test Cases
      console.log(Composite(20)); // Expected Output: true
      console.log(Composite(13)); // Expected Output: false
      