// Pass by Value (Primitive Data Types)
function changeValue(num) {
          num = 42; // Changing the value of the parameter
          console.log("Inside function (pass by value):", num);
      }
      
      let originalValue = 19;
      console.log("Before function call (pass by value):", originalValue);
      changeValue(originalValue);
      console.log("After function call (pass by value):", originalValue);
      
      // Pass by Reference (Objects)
      function changeReference(obj) {
          obj.name = "Manish Kumar Verma"; // Modifying the property of the object
          console.log("Inside function (pass by reference):", obj);
      }
      
      let originalObject = { name: "Jane Smith" };
      console.log("\nBefore function call (pass by reference):", originalObject);
      changeReference(originalObject);
      console.log("After function call (pass by reference):", originalObject);
     
      