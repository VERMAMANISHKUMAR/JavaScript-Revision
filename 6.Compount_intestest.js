function compoundInterest(principalAmount, annualInterestRate, numberOfYears) {
          let answer = principalAmount;
      
          // Use a for loop to iterate for each year
          for (let year = 1; year <= numberOfYears; year++) {
              // Calculate interest for the current year
              let interest = answer * annualInterestRate;
      
              // Add interest to the principal amount for the next iteration
              answer += interest;
          }
      
          return answer;
      }
      
      // Test Case
      console.log(compoundInterest(500, 0.08, 5)); // Expected Output: 734.66
      