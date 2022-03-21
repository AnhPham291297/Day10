// HW1 --------------------------------
// Cho đoạn code sau, sau đó biểu diễn các cách để truy cập được các thuộc tính bên trong object đó
/*
let person = {
  name: "Bob",
  occupation: "web developer",
  hobbies: "painting",
};

console.log(person.name);
// console.log(person[occupation]);
console.log(person["hobbies"]);
console.log(({ name } = person));
*/

// HW2 -------------------------------------
// Cho object obj, hãy tạo một array chứa key của tất cả các property của obj và đều viết hoa
// có sử dụng Object.key()
// có sử dụng các method của array
// Có sử dụng toUpperCase()
let obj1 = {
  b: 2,
  a: 1,
  c: 3,
};

// TODO
// ?? OUTPUT is [B, A, C]

const keyObject = Object.keys(obj1);
const output = keyObject.map((element) => {
  return element.toUpperCase();
});
console.log(output);

// HW3 -----------------------------------
// function myFamily() {
//   this.quantity = 4;
//   this.member = ["Dad", "Mom", "Me", "Daughter"];
//   this.location = "Vietnam";
// }

// const family = new myFamily();
// console.log(family);

// HW4 -----------------------------------
// Thay đổi giá trị 6 bằng 606 bằng 2 cách
let obj2 = {
  foo: { a: "hello", b: "world" },
  bar: ["example", "mem", null, { xyz: 6 }, 88],
  qux: [4, 8, 12],
};

//c1
obj2.bar[3].xyz = 606;
console.log(obj2);
