//Email Verification
//1 input an email
//2 Length of the email >11
//3 after . only 2 or 3 characters allowed
//4 minimum 3 characters between @ and .

const email = prompt('Enter the email address');
const emailLen =email.length;
const dotIndex = email.lastIndexOf(".");
const atIndex = email.lastIndexOf("@");
const lastIndex = emailLen - 1;

if(emailLen < 11 && lastIndex- dotIndex < 2 && lastIndex - dotIndex >3 && dotIndex - atIndex < 3)
{
console.log('valid Email');
}else{
          console.log('invalid email')
}

 //or

// const email = prompt('Enter the email address');
// const emailLen = email.length;
// const dotIndex = email.lastIndexOf(".");
// const atIndex = email.lastIndexOf("@");
// const lastIndex = emailLen - 1;

// // Check if the email meets the validation criteria
// if (emailLen >= 11 && lastIndex - dotIndex >= 2 && lastIndex - dotIndex <= 3 && dotIndex - atIndex >= 3) {
//   console.log('Valid Email');
// } else {
//   console.log('Invalid Email');
// }
   
//or 

function main(email) {
          let result;
        
          const emailLen = email.length;
          const dotIndex = email.lastIndexOf(".");
          const atIndex = email.lastIndexOf("@");
          const lastIndex = emailLen - 1;
        
          // Check if the email meets the validation criteria
          if (
            emailLen >= 11 &&
            lastIndex - dotIndex >= 2 &&
            lastIndex - dotIndex <= 3 &&
            dotIndex - atIndex >= 3 &&
            atIndex >= 3
          ) {
            // Store the valid email in the result variable with a message
            result = `${email} is valid`;
          } else {
            // If the email is invalid, store the message in the result variable
            result = 'Invalid email';
          }
        
          return result;
        }