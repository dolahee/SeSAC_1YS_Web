let list = ["apple", "banana"];
[itme, itme] = list;
// let itme1 = list [0];
// let itme2 = list [1];
// let itme3 = list [2];

[itme1, itme2 = "peach", itme3 = "orange"] = list;
console.log(itme1);
console.log(itme2);
console.log(itme3);

let x = 1;
let y = 3;
let temp = x;
x = y;
y = temp;

[y, x] = [x, y];
// [1,3]
// [a,b] = [1,3]

let obj = {
  a: "one",
  b: "two",
  e: "1",
  f: "2",
};

// let a = obj.a;

let { b: key1, a, c = "three" } = obj;
console.log(a);
console.log(key1);
console.log(c);

let { b, ...rest } = obj;
console.log(b);
console.log(rest);
