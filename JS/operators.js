// Arithmetic operator
let x = 10;
let y = 20;
console.log("Addition is ", x + y);
console.log("Subtraction is ", x - y);
console.log("Multiplication is ", x * y);
console.log("Division is ", x / y);
console.log("Exponentiation is ", x ** y);
console.log("Using math " + Math.pow(x, 2));
console.log("Modulus is ", x % y);
console.log(
  "Suffix Incerement of x is ",
  x++,
  " Suffix Increment of y is ",
  y++
);
console.log(x, y);
console.log(
  "Preffix Incerement of x is ",
  ++x,
  " Preffix Increment of y is ",
  ++y
);
console.log(x, y);
console.log(
  "Suffix Decrement of x is ",
  x--,
  " Suffix Decrement of y is ",
  y--
);
console.log(x, y);
console.log(
  "Preffix Decrement of x is ",
  --x,
  " Preffix Decrement of y is ",
  --y
);
console.log(x, y);
console.log("Modulus is ", y % x);

// Comparison operator

if (5 == 5) console.log(" 5 == 5 is equal"); //true
if (5 == "5") console.log(" '5' == 5 "); //true
if (5 === 5) console.log(" 5 === 5 "); //true
if ("5" === 5) console.log(" '5' === 5 "); // not valid or false
if (5 != 5) console.log(" 5 != 5 "); //false
if ("5" != 5) console.log(" '5' != 5 "); //false
if ("5" !== 5) console.log(" '5' !== 5 "); //true
if (5 < 5) console.log("5 < 5"); //false
if (5 < 10) console.log("5 < 10"); //true
if (5 > 5) console.log("5 > 5"); //false
if (5 > 10) console.log("5 > 10"); //false
if (5 <= 10) console.log("5 <= 10"); //true
if (5 >= 10) console.log("5 >= 10"); //false
if ("a" < "b") console.log("a<b");
if ("b" < "a") console.log("b<a");
if ("10" < "1") console.log("10<1");

//Logical operators

if (x < 20 && y > 10) console.log(" true");
if (x < 20 || y < 10) console.log(" true");
if (!(x < 20 && y > 10)) console.log(" false ");
else console.log("true");

//relational in and instaanceOf operator

let languages = ["html", "java", "python"];
console.log(0 in languages); //check the property in the array is present or not
console.log(1 in languages);
console.log(3 in languages);

const obj = {
  name: "rohit",
};

console.log("name" in obj); //true
console.log("gen" in obj); //false

//instance check  that either this is the instance of any particular class or not
// returns boolena value

console.log(obj instanceof Object); //true
console.log(obj instanceof String); //false

//Ternary operator
let ans = x > y ? "x is smaller" : "y is smaller";
console.log(ans);

////////////////////Spread operator/////////////////////
let simple = [1, 2, 3];
let adv = [4, ...simple];
console.log(...adv);

let simpleobj = {
  name: "rohit",
  surname: "chavda",
};

//making shallow copy of the object throught the spread operator

let advobj = { ...simpleobj };
advobj.name = "scam";
console.log(simpleobj.name);
console.log(advobj.name);

// passing the spread operators into function and doing the destructuring

function fullName([name, surname]) {
  console.log(name, surname);
}
fullName(["rohit", "chavda"]);

// fullName(...test) is equal fullName("rohit","chavda")

// using of THIS keyword
const objecting = {
  call1: function () {
    console.log("calling call 1");
    console.log("this: ", this);
    const call2 = function () {
      console.log("call2");
      console.log("this in call2", this);
    };
    call2();
    // console.log("calling with window: ", window.call2());
  },
};

objecting.call1();
