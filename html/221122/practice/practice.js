const express = require("express");
const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use("/static", express.static("static"));

app.get("/img", (req, res) => {
  res.render("index", {
    title: "우리집강아지자랑하기입니다.",
    data: [
      "/static/img/dog1.jpg",
      "/static/img/dog2.jpg",
      "/static/img/dog3.jpg",
    ],
  });
});

app.listen(port, () => {
  console.log("Server port:", port);
});

app.get("/get", (req, res) => {
  res.render("get");
});

app.get("/post", (req, res) => {
  res.render("post");
});

app.get("/getForm", (req, res) => {
  console.log(req.query); // 주소 물음표 뒤에 나오는 것들이 모두 쿼리
  res.send("get 요청 성공");
});

app.post("/postForm", (req, res) => {
  console.log(req.body); // post는 body에 정보가 담겨오기 때문에 바꿔야 한다.
  res.render("result", { data: req.body });
});
