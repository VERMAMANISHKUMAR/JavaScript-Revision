//Deap copy vs Shallow copy
//Deap copy
const a =30;
const b=a;
const c=a;
const d=b;
console.log(d);
//Shallow copy
const obj1 = {
          name: 'John',
          age: 30
          };
          const obj2 = Object.assign(obj1);
          console.log(obj2);
