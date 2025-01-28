// var prod =(num1 , num2) =>{
//           return  num1*num2;
// }
// console.log(prod(34,67))

// let result=(()=>{
// let x =5;

// return ()=>{
//           x +=1;
//           return x;
// };
// })();
// console.log(result);


// const greet = name =>`hello, $(name)!`;
// console.log(greet("Alice"));


/* Functions in JS */

const sum1 = sum(5, 6);
//console.log(sum1);

//Function Declaration
function sum(a, b) {
  return a + b;
}

// Function expression
var sum2 = function (a, b) {
  return a + b;
};

//console.log(sum2(1, 8));

//Arrow function
var prod = (num1, num2) => num1 * num2;
//console.log(prod(2, 4));

//IIFE (Immediately Invoked Function Expression )
(function (a, b) {
  console.log(a ** b);
})(4, 2);

const user = (function () {
  const userData = {
    userName: 'manish',
    userAge: 20,
  };

  function getName() {
    console.log(userData.userName);
  }

  function updateAge(age) {
    console.log(userData.userAge + age);
  }

  return { getName, updateAge };
})();

console.log(user);
console.log(user.userData);
user.getName();
user.updateAge(7);
// ------------------------------------------
function main() {
          const userAuth = (function () {
            const users = [];
        
            const registerUser = (username, password) => {
              if (checkCredentials(username, password)) {
                return "The user is already registered";
              } else {
                const newUser = { username, password };
                users.push(newUser);
                return "The user have been added to the registeredUser array";
              }
            };
        
            const checkCredentials = (username, password) => {
              return users.some((user) => user.username === username && user.password === password);
            };
        
            return {
              registerUser,
              checkCredentials,
            };
          })();
        
          console.log(userAuth.registerUser("user1", "password123"));
          // Output: The user have been added to the registeredUser array
          console.log(userAuth.registerUser("user1", "password123"));
          // Output: The user is already registered
        
          return userAuth;
        }
        
        main();
        