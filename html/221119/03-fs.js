// const fs = require("fs");
// fs.readFile("./test.txt", function (err, data) {
//   if (err) console.log(err);
//   console.log("data : ", data);
//   console.log("data2 : ", data.toString());
// });

// var result = fs.readFile(".test.txt");
const fs2 = require("fs").promises;
// fs2.readFile("./test.txt").then((data) => {
//   console.log("promise - data: ", data);
// });

// fs2.writeFile("./wrire.txt", "dohee is bad").then(function () {
//   return fs2.readFile("./wrire.txt").then(function (data) {
//     console.log(data.toString());
//   });
// });

// fs.writeFile("./write2.txt", "dohee", function (err) {
//   if (err) throw new Error(err);
//   console.log("writeFile success");
//   fs.readFile("./write2.txt", function (err, data) {
//     if (err) throw err;
//     console.log("write2File data:", data.toString());
//   });
// });

fs2.writeFile("./sesac.txt", "반갑습니다").then(function () {
  return fs2.readFile("./sesac.txt").then(function (data) {
    console.log(data.toString());
    fs2.copyFile("./sesac.txt", "./sesac2.txt").then(() => {});
    fs2.rename("./sesac2.txt", "new.txt").then(() => {});
  });
});
