let array = [1, 2, 3];

let array2 = array; //deep copy both have same reference
array2.push(4);

let array3 = [...array]; //shallow copy with different reference
array3.push(5);

let array4 = array.slice(); //shallow copy with different reference

console.log(array, array2, array3, array4);

console.log(array.pop()); //will remove the last element
array.push(6); //will add element at last
console.log(array);
array.shift(); // remove element from first place
console.log(array);
array.unshift(10); // add element at first place
console.log(array);

//////////////////////////////////////////////////////////////////////

console.log("Check dogs example");

function checkDogs(dogjulia, dogkate) {
  let shallowJulie = [...dogjulia];

  shallowJulie.pop();
  shallowJulie.pop();
  shallowJulie.shift();
  console.log(shallowJulie);

  const oneArray = shallowJulie.concat(dogkate);
  for (const el in oneArray) {
    oneArray[el] >= 5
      ? console.log(
          `Dog number ${el} is an adult, and is ${oneArray[el]} years old`
        )
      : console.log(`Dog number ${el} is still puppy`);
  }
}

let julie = [3, 5, 2, 12, 7];
let kate = [4, 1, 15, 8, 3];
checkDogs(julie, kate);
