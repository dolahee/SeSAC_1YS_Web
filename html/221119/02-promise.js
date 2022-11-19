// new Promise ( function (resovle, reject){

// });

function func1() {
  return new Promise(function (resovle, reject) {
    resovle("성공");
  });
}

var a = func1();
console.log(a);
var b = func2();
console.log(b);

func1().then(function (result) {
  console.log("result : ", result);
});

function func2() {
  return new Promise(function (resovle, reject) {
    setTimeout(function () {
      resovle("성공");
    }, 1000);
  });
}
func2()
  .then(function (result) {
    console.log("reuslt2: ", result);
    return "a";
  })
  .then(function (abc) {
    console.log("abc : ", abc);
  });
