const obj3 = {name: "Test", age: 25 };
const prop = "name";
const obj4 = { ...obj3, age: 24, [prop]: "Guvi" };
console.log(obj4);
