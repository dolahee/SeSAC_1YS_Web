function func1(callback) {
  console.log("finc1");
  console.log(callback);
  callback("이름");
}
function func2(name) {
  console.log("func2");
  console.log("name: ", name);
}
func1(func2);
func1(function (name) {
  console.log("func2");
  console.log("name : ", name);
});

// var a = 1;
// test(a);
// test(1);
