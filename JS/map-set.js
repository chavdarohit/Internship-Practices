// removing duplicate value from the array

let array = [1, 1, 2, 2, 3, 3];
array = [...new Set(array)];
console.log(...array);

///working with the set
let newSet = new Set(["pizza", "pasta", "pizza", "pasta", "rosseeto"]);
console.log(newSet);

console.log("it has pasta", newSet.has("pasta"));
console.log("deleting the pasta", newSet.delete("pasta"));
console.log(newSet);

newSet.add("pasta");
console.log(newSet);

newSet.forEach((ele) => console.log(ele));

//working with the map
let newMap = new Map();
newMap.set(1, "rohit");
newMap.set(2, "tarang");
newMap.set(3, "manish");
newMap.set(4, "rohit");

console.log(newMap.get(1));

// newMap.forEach((ele) => console.log(ele))

const openingHours = {
  thu: {
    open: 8,
    close: 20,
  },
  fri: {
    open: 8,
    close: 20,
  },
  sat: {
    open: 8,
    close: 20,
  },
};

//converting the predefinded object to the Map
const hoursMap = new Map(Object.entries(openingHours));

for(let [day,arr] of hoursMap)
{
    console.log(day,arr);
}

// console.log(hoursMap);
