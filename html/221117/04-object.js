// console.log("__filename: " + __filename);
// console.log("__dirname:" + __dirname);
// /**
//  * process 객체 = 현재 실행 중인 노드 프로세스 정보
//  */

// console.log("process.version:" + process.version);
// console.log("process.arch:" + process.arch);
// console.log("process.platfrom:" + process.platfrom);
// console.log("process.cpuUsage:" + process.cpuUsage());
// console.log("----------------------------------------------");
// /**
//  * os - 운영체제
//  */
// const os = require("os");
// console.log(os.type());
// console.log("os.cpus:", os.cpus());
// console.log("os.homedir:", os.homedir());
// console.log("os.freemem:", os.freemem());

// /**
//  * path 모듈
//  */

// // const path = require("path");
// // const file = __filename;
// console.log("path.extname:", path.extname(file));
// console.log("path.parse:", path.parse(file));

// /**실습
//  *
//  */
console.log(
  "-------------------------------------------------------------------------------------------"
);
const os = require("os");
console.log("사용 가능한 메모리", os.freemem());
console.log("전체 메모리", os.totalmem());
console.log("홈디렉토리경로", os.homedir());

console.log("path 모듈");
const path = require("path");
const file = __filename;
console.log("파일 구분자", path.sep);
console.log("파일의 확장자", path.extname(file));
console.log("파일의 경로 분리", path.parse(file));
