const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/public", express.static("staic"));
// 실제 존재하는 폴더에 퍼블릭 경로로 접근할 수 있도록 함
// src="/public/img/dog.jpg"

// localhost:8080
app.get("/", (req, res) => {
  res.send("hello Express!");
});

// localhost:8080/test
app.get("/test", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// res = 서버가 클라이언트한테 보내는 요청
// req = 클라이언트가 서버측에 보내는 요청

//localhost:8080/ejd
app.get("/ejs", (req, res) => {
  res.render("index", {
    title: "index페이지입니다.",
    data: ["a", "b", "c"],
  });
});

app.listen(port, () => {
  console.log("Server port:", port);
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/getForm", (req, res) => {
  console.log(req.query); // 주소 물음표 뒤에 나오는 것들이 모두 쿼리
  res.send("get 요청 성공");
});

app.post("/postForm", (req, res) => {
  console.log(req.body); // post는 body에 정보가 담겨오기 때문에 바꿔야 한다.
  res.render("result", { data: req.body });
});
