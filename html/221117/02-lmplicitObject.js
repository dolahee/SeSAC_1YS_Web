/**
 * global 내장객체
 */

console.log(global);
global.console.log(global.console);
/**
 * consloe 내장객체
 */

let obj = {
  out: {
    in: {
      key: "value",
    },
  },
};
console.log(obj);
console.log(obj["out"]);
console.time("시간");
console.error("error");
console.timeEnd("시간");
console.table([{ name: "abc" }, { name: "def" }]);
console.dit(obj, { colors: true, depth: 1 });
console.dit(obj, { colors: true, depth: 2 });
console.trace("Error");
