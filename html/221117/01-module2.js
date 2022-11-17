const num = require("./01-module");
const a = num.a;
const b = num.b;

function add() {
  return a + b;
}

module.exports = add;

// module.exports = {add};
// result = { add:}
