function hell() {
  console.log("세번째는 hell");
}
function back() {
  console.log("두번째는 back");
  setTimeout(hell, 1500);
}

function call() {
  console.log("시작은 call");
  setTimeout(back, 1000);
}

console.log("사용자는 박도희 ");

setTimeout(call, 2000);

// setTimeout(function () {
//   console.log("시작은 call");
//   setTimeout(function () {
//     console.log("두번째는 back");
//     setTimeout(function () {
//       console.log("세번째는 hell");
//     }, 1500);
//   }, 1000);
// }, 2000);
