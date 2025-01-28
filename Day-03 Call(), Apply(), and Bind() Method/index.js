// Example object
const person = {
          fullName: function() {
                    return this.firstName + " " + this.lastName + ", " +this.city + ", " +this.country;
          },
     
};

// Example object to use with call(), apply(), and bind()
const person1 = {
          firstName: "John",
          lastName: "Doe",
          city: "Berlin",
          country: "Germany"
};

// Using call() method
//The call() method calls a function with a specified this value and arguments provided one by one.
const resultCall = person.fullName.call(person1, "Oslo", "Norway");
console.log(resultCall); // Output: John Doe, Oslo, Norway

// Using apply() method
const resultApply = person.fullName.apply(person1, ["Oslo", "Norway"]);
console.log(resultApply); // Output: John Doe, Oslo, Norway

// Using bind() method
const boundFunction = person.fullName.bind(person1);
const resultBind = boundFunction("Oslo", "Norway");
console.log(resultBind); // Output: John Doe, Oslo, Norway
// ------------------------------------------------------------------
//Call() Method
//The call() method calls a function with a given this value and arguments provided individually.
const person2= {
          firstName: "John",
          lastName: "Doe",
        };
        
        function greet(greeting, punctuation) {
          console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
        }
        
        greet.call(person2, "Hello", "!"); // Output: Hello, John Doe!
        
          // Apply() Method
          //The apply() method calls a function with a given this value, and arguments provided as an array.
          const person3 = {
                    firstName: "Jane",
                    lastName: "Smith",
                  };
                  
                  function greet(greeting, punctuation) {
                    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
                  }
                  
                  greet.apply(person3, ["Hi", "!"]); // Output: Hi, Jane Smith!
           // Bind() Method
          //The bind() method returns a new function, allowing you to pass any number of arguments.       
          const person4 = {
                    firstName: "Jane",
                    lastName: "Smith",
                  };
                  
                  function greet(greeting, punctuation) {
                    console.log(`${greeting}, ${this.firstName} ${this.lastName}${punctuation}`);
                  }
                  
                  const greetJane = greet.bind(person4);
                  greetJane("Hello", "!"); // Output: Hello, Jane Smith!