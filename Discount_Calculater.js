function discountCalculator(totalAmount) {
          let answer;
        
          // Check if the total amount is $100 or more
          if (totalAmount >= 100) {
            // Apply a 10% discount
            answer = totalAmount * 0.9;
          } else if (totalAmount >= 50) {
            // Apply a 5% discount
            answer = totalAmount * 0.95;
          } else {
            // No discount if the total amount is less than $50
            answer = totalAmount;
          }
        
          return answer;
        }
        
        // Test cases
        console.log(discountCalculator(200)); // Expected Output: 180
        console.log(discountCalculator(80));  // Expected Output: 76
        