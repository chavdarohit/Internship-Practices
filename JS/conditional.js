let date = new Date();

getHour = function () {
  return date
    .toString()
    .split("-")
    .toString()
    .split(" ")[4]
    .toString()
    .split(":")[0];
};

//or

function gethours() {
  return date.getHours();
}

// console.log(date.split("-"));

if (gethours() >= 0 && gethours() <= 12) {
  console.log(gethours());
} else {
  console.log(gethours() - 12);
}

console.log(getHour() >= 0 && getHour() <= 12 ? "AM" : "PM");
console.log(date.toLocaleDateString());
console.log(date.getMonth());

////Switch case

let number = "monday";
switch (number) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tueday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  case "monday":
    console.log("MOnday");
    break;
  default:
    console.log("Invalid number");
    break;
}
