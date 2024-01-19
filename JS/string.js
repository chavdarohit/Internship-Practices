let myname = "chavda rohit";

console.log("Length of string is ", myname.length);

console.log("Index of given character 'r' ", myname.indexOf("r"));

console.log("last Index of given character 'a' ", myname.lastIndexOf("a"));

console.log("Searching 'rohit' ", myname.search("rohit"));

console.log(
  "slicing the string for surname only 'chavda' ",
  myname.slice(0, myname.indexOf(" "))
);

console.log(
  "slicing the string for name from back only 'rohit'",
  myname.slice(myname.indexOf(" ") + 1)
);

console.log("Substring", myname.substring(5, 6)); //slice from startindex to endindex
console.log("Substring", myname.substr(5, 6)); // slice from start index to length that how many number you want to cut

console.log(
  "Replace",
  myname.replace("rohit", "socialpilot").replace("chavda", "hii")
);

console.log("replace all", myname.replaceAll("a", "r"));

console.log("uppercase", myname.toUpperCase());
console.log("uppercase", myname.toLowerCase());

console.log("concat", myname.concat(" studied MCA"));

let yourName = "     main thread      ";
console.log("Triming ", yourName.trim());
console.log(yourName);

console.log("charAt", myname.charAt(1));
console.log("charCodeAt", myname.charCodeAt(3));

console.log("split", myname.split(" ")); //convert value into the array

console.log("splice", myname.split("").splice(7, 5).join("")); // remove the character also

let strarray = myname.split("");
console.log(strarray);

strarray.splice(7, 5);
console.log(strarray);

let res = strarray.join("");
console.log(res);
