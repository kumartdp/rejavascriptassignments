// Refactor the following function into a one-liner:
const printName = (name) => 
                      'Hi ' + name;
console.log(printName("saikumar"));
// Rewrite the following code using template literals
const printBill = (name, bill) => 
                     `Hi ${name}, please pay: ${bill}`;
console.log(printBill('sai',100));
           
// Modify the following code such that the object properties are destructured and logged.
const person = {
                      name: 'Noam Chomsky',
                      age: 92
            }
           
           let {name,age} = person;
           console.log(name);
           console.log(age);