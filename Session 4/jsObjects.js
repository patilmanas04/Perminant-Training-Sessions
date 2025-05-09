// const details = {
//   name: "Jitendra",
//   age: 21,
//   branch: "CSE",
//   college: "UTU",
// }

// console.log(details.name);
// console.log(details.age);
// console.log(details.branch);
// console.log(details.college);

const names = [
  "Jitendra",
  "Rahul",
  "Kirsh",
  "Tisha",
  "Isha",
  "Shreya",
  "Priyanshu",
]

// for (let i = 0; i < names.length; i++) {
//   console.log(names[i]);
// }

names.forEach((element, index, array) => {
  console.log(element, index, array);
})

const newNames = names.map((element, index, array) => {
  return element + " " + index;
})

console.log(newNames);


const studentDetailsDetails = {
  name: "",
  age: "",
  branch: "",
  enrollmentNo: ""
}

const details = [
  {
    name: "",
    age: "",
    branch: "",
    enrollmentNo: ""
  },
  {
    name: "",
    age: "",
    branch: "",
    enrollmentNo: ""
  },
  {
    name: "",
    age: "",
    branch: "",
    enrollmentNo: ""
  }
]