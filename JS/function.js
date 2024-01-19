//arrow function returning the funtion
const greet = (greeting) => (name) => console.log(`${greeting} ${name}`);
greet("hey")("rohit");

//same as above but with the normal function expression
function greet2(greeting) {
  let counter = 0;
  return function greets(name) {
    counter++;
    console.log(`${greeting} ${name}`);
    console.log(counter);
  };
}
greet2("hey")("rohit");

// bind method for function
const obj = {
  Name: "rohit",
  surname: "chavda",
  getFullname: function () {
    return `Firstname ${this.Name} and surname is ${this.surname}`;
  },
};

const printFullname = obj.getFullname.bind(obj);
//teeling that the method which is "obj.getFullname" to bind with and create new function
// which is "printFullname" which will be always called with "this"  =  "obj"

console.log(obj.getFullname());
console.log(printFullname());

// another example bind method example without the object

function meeting() {
  console.log("this is meeting called");
}

meeting();
const meet = meeting.bind(this); // created new function and assigning meeting function to eat
// that means it wil call every time the meeting function when the meet is called with
//"this" which is the global or window object here
meet();

