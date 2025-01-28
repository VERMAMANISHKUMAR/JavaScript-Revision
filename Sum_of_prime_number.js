function isPrime(number) {
          // Function to check if a number is prime
          if (number < 2) {
              return false;
          }
          for (let i = 2; i <= Math.sqrt(number); i++) {
              if (number % i === 0) {
                  return false;
              }
          }
          return true;
      }
      
      function sumOfPrimeNumbers(limit) {
          let answer = 0;
      
          // Iterate through numbers from 2 to the given limit
          for (let i = 2; i <= limit; i++) {
              // Check if the current number is prime
              if (isPrime(i)) {
                  // If prime, add it to the sum
                  answer += i;
              }
          }
      
          return answer;
      }
      
      // Test Case
      console.log(sumOfPrimeNumbers(50)); // Expected Output: 328
      