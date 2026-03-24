let person = {
  firstName: "Rahul",
  lastName: "Attuluri",
  age: 28,
  habits: ["Playing Chess", "Singing"],
};

console.log(person.habits);  // ["Playing Chess", "Singing"]

console.log(person.habits[0]);  // Playing Chess

console.log(person["habits"][1]);  // Singing