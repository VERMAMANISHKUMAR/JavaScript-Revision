function main(marks) {
          let result;
        
          // Grade determination based on the specified criteria
          if (marks >= 90) {
            result = "A";
          } else if (marks >= 80 && marks <= 89) {
            result = "B";
          } else if (marks >= 70 && marks <= 79) {
            result = "C";
          } else if (marks >= 60 && marks <= 69) {
            result = "D";
          } else {
            result = "F";
          }
        
          return result;
        }
        
        // Test cases
        console.log(main(89)); // Expected Output: B
        console.log(main(93)); // Expected Output: A
        