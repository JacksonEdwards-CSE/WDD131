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