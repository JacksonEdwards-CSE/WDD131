//Arrays:

let names = ["Thea", "Theo", "Aaron", "David", "Annie"];

console.log(names);

console.log(names[2]);

let ages = [8, 6, 2];

let mixArray = ["three", 3, "triple", 30]

//objects:

let studentName = "Jimmy";
let studentClass = "WDD131";

let student = {
    name : "Jimmy",

    class: "WDD131",

    grade: 98
};

console.log(student);

console.log(student.name);

//Array Methods:

names.forEach((name) => {
    console.log(name);
});

let fullNames = names.map((item) => {
    return item + " Edwards";
});

console.log(fullNames);

let filteredArray = names.filter((name) => {
    return name[0] === "A"
});

console.log(filteredArray);

//Introduced Topics:

const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction_one)

function myFunction_one(item) {
  console.log(item * 10); 
}     

//-------------------------------------------------------\\
const numbers_two = [65, 44, 12, 4];
const newArr = numbers_two.map(myFunction_two)

function myFunction_two(num) {
  return num * 10;
}     

//-------------------------------------------------------\\
const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
} 

//-------------------------------------------------------\\
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let index = fruits.indexOf("Apple");
console.log(index);