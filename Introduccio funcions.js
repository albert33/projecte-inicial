var greeting = function (name) {
    console.log("Great to see you," + " " + name);
};

greeting("Albert");

// Write your foodDemand function below.
// Last hint: In your reusable block of code, end each line
// with a semicolon (;)
var foodDemand = function (food){
    console.log("I want to eat" + " " + food);
};
foodDemand("fried eggs");

// Parameter is a number, and we do math with that parameter
var timesTwo = function(number) {
    return number * 2;
};
var newNumber = timesTwo(4);
console.log(newNumber);

// Define quarter here.
var quarter = function (number){
    return number/4;
};


if (quarter(12) % 3 === 0 ) {
  console.log("The statement is true");
} else {
  console.log("The statement is false");
}

// Write your function starting on line 3

var perimeterBox = function (length,width){
    return length + length + width + width;
};

perimeterBox(4,2);

//

var nameString = function (name) {
	return "Hi, I am" + " " + name;
};
console.log(nameString("Albert"));

