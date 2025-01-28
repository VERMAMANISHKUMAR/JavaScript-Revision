function leapYear(year) {
          let answer;
      
          // Condition 1: If a year is divisible by 4, it is a leap year.
          if (year % 4 === 0) {
              // Condition 2: If a year is divisible by 100, it is not a leap year.
              if (year % 100 === 0) {
                  // Condition 3: If a year is divisible by 400, it is a leap year.
                  answer = year % 400 === 0;
              } else {
                  answer = true;
              }
          } else {
              answer = false;
          }
      
          return answer;
      }