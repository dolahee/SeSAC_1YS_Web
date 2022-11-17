// const url = require("url");

// // console.log(url);
// // console.log(url.parse);
// // var obj = url.parse(
// //   "https://www.bing.com/search?q=node+path&cvid=adb4abd2c92f416ab7033da99905f3c2&aqs=edge..69i57j0l8.14542j0j4&FORM=ANAB01&PC=NMTS"
// // );
// // console.log(obj);
// // console.log(url.format(obj));

// // console.log(obj.protocol);

// var string = new url.URL("https://localhost?name=sesac&name=코딩온&age=10");
// console.log(string.searchParams.getAll("name"));
// console.log(string.searchParams.keys());
// string.searchParams.append("age", "20");
// console.log(string.searchParams.getAll("age"));
// console.log(string.searchParams.has("age"));

const url = require("url");

var string = new url.URL(
  "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=sesac"
);

console.log(string.searchParams.keys());
console.log(string.searchParams.values());
string.searchParams.delete("sm");
console.log(string.searchParams.keys());
