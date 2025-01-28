function coffeeMachine(coffeeType) {
          // Convert the input to lowercase
          coffeeType = coffeeType.toLowerCase();
      
          let answer;
      
          // Use a switch statement to handle different coffee types
          switch (coffeeType) {
              case 'regular':
              case 'espresso':
                  answer = '$2.50';
                  break;
              case 'latte':
                  answer = '$3.50';
                  break;
              case 'cappuccino':
                  answer = '$4.00';
                  break;
              default:
                  answer = 'Invalid coffee type';
          }
      
          return answer;
      }
      
      // Test Cases
      console.log(coffeeMachine('regular')); // Expected Output: $2.50
      console.log(coffeeMachine('ESPRESSO')); // Expected Output: $2.50
      console.log(coffeeMachine('latte')); // Expected Output: $3.50
      console.log(coffeeMachine('cappuccino')); // Expected Output: $4.00
      console.log(coffeeMachine('mocha')); // Expected Output: Invalid coffee type
      