function checkEligibility(age){
          let answer;
           // Check if the user is above 18
          if( age >= 18){
                    answer = "your are eligibility this form this";
          }
          else{
           // User is below 18, denied access
                  answer = "your are not eligibility this form";
          }
          return answer;
}
console.log(checkEligibility(20)); // Pass age as a single argument
let result = checkEligibility(20); // Pass age as a single argument
console.log(result);


