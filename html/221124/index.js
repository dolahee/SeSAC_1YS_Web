const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function (req, res) {
  res.render("index");
});

// app.get("/form", function (req, res) {
//   console.log(req.query);
//   res.send({ msg: "이름은: " + req.query.name });
// });

app.get("/practice", (req, res) => {
  res.render("practice");
});

// app.get("/practice2", (req, res) => {
//   console.log(req.query); // 주소 물음표 뒤에 나오는 것들이 모두 쿼리
//   res.send("get 요청 성공");
// });

app.post("/practice", (req, res) => {
  console.log(req.body);

  // name으로 받아야함
  if (req.body.name == "박도희") {
    console.log(req.body.name);
    res.send('<p style="color: blue">로그인성공</p>');
  } else {
    console.log(req.body.name);
    res.send('<p style="color: red">로그인 실패</p>');
  }
});

//fetch
// post 전송

// app.post("/practice", function (req, res) {
//   if (req.body.name == "박도희") {
//     return res.send({ msg: "<p style='color:blue'>로그인 성공</p>" });
//   } else {
//     return res.send({ msg: "<p style='color:red'>로그인 실패</p>" });
//   }
// });

// app.post("/practice", (req, res) => {
//   console.log(req.body.name);
// });

app.listen(port, () => {
  console.log("Server Port: ", port);
});
