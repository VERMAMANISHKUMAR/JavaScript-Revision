// What is Closure in javascript?
//Ans:- Closure is a function that has access to its outer function scope even after the outer function has returned.
//  This means a closure can remember and access variables and arguments of its outer function even after the function has finished.

// Example 1
function outerFunction1(){
          let outerVariable="I'm an outer variable"
          function innerFunction(){
           console.log(outerVariable)//Accessing the outer variable
          }
          return innerFunction;//Returning the inner function
}
const innerFun=outerFunction1();// outerFunction is called
innerFun(); // "I'm an outer variable" is logged to the console
// -------------------------------------------------------------------
function outerFunction(){
          let outerVariable="I am outer variable"
          return function innerFunction(){ //Returning the inner function
           console.log(outerVariable)//Accessing the outer variable
          }
}
const innFunc=outerFunction();// outerFunction is called
innFunc();// "I am outer variable" is logged to the console