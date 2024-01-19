//q1 Anagram using recurssion

//simple anagram no recurssion

let firststring = "rrohit";
let secondstring = "tohirr";

let countFreqFor1 = {};
for (let char of firststring) {
  if (!Object.keys(countFreqFor1).includes(char)) countFreqFor1[char] = 1;
  else countFreqFor1[char] += 1;
}
console.log(countFreqFor1);

let countFreqFor2 = {};
for (let char of secondstring) {
  if (!Object.keys(countFreqFor2).includes(char)) countFreqFor2[char] = 1;
  else countFreqFor2[char] += 1;
}
console.log(countFreqFor2);

for (let char of secondstring) {
  // console.log(char);
  if (
    !firststring.includes(char) ||
    countFreqFor1[char] != countFreqFor2[char]
  ) {
    console.log("Not an anagram");
    return;
  }
}
console.log("It is an Anagram");

//// Recursive anagrams

function isAnagram(string1, string2) {
  if (string1.length !== string2.length) return false;

  if (string1.length === 0) return true;

  let char = string1[0];

  let charindexof = string2.indexOf(char);

  let updateString1 = string1.slice(1);
  let updateString2 =
    string2.slice(0, charindexof) + string2.slice(charindexof + 1);

  return isAnagram(updateString1, updateString2);
}

let string1 = "silent";
let string2 = "listen";

if (isAnagram(string1, string2)) console.log(" it is anagram");
else console.log("it is not an Anagram");

//q2 Find sum of the given number

let sum = 0;
function findSum(number) {
  if (number > 0) {
    sum += number;
    findSum(number - 1);
  }
  return sum;
}

console.log(findSum(10));

//q3 take odd number from that array

let oddarray = [];
function takeOddOut(array) {
  if (array.length > 0) {
    let firstval = array[0];

    if (firstval % 2 !== 0) oddarray.push(firstval);

    // console.log("function called");
    takeOddOut(array.slice(1));
  }
}
let array = [1, 4, 3, 2, 5, 6, 7, 5, 4, 1, 5, 9, 13, 15, 17];
takeOddOut(array);
console.log(...oddarray);

//q4 check frequency number aand its corresponding squares are present or not

function findSquares(array1, array2) {
  for (let item of array1) {
    if (
      !array2.includes(item * item) ||
      firstFreq[item] > secondFreq[item * item]
    ) {
      console.log("square not exists");
      return;
    }
  }
  console.log("All square exists");
}

let array1 = [1, 2, 2, 4, 3, 3, 3];
let array2 = [1, 4, 9, 9, 9, 4, 16];

let firstFreq = {},
  secondFreq = {};
for (let a of array1) {
  firstFreq[a] = (firstFreq[a] || 0) + 1;
}
for (let a of array2) {
  secondFreq[a] = (secondFreq[a] || 0) + 1;
}

findSquares(array1, array2);
