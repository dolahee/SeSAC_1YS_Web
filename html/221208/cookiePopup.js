const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 8000;
app.set("view engine", "ejs");

app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cookieParser());

const option = {
  httpOnly: true,
  expires: new Date("2022-12-09T09:00:00"),
};

app.get("/", (req, res) => {
  if (req.cookies.popup == "1") res.render("cookiepopup", { popup: "none" });
  else res.render("cookiepopup", { popup: "block" });
});

app.post("/setpopup", (req, res) => {
  res.cookie("popup", "1", option);
  // 1. 쿠키를 만든다. 오늘 하루 열지 않음을 클릭했음을 구분하는 쿠키 생성 {popup:1}
  // 2. 서버 응답
  res.send("쿠키생성성공");
});

app.listen(port, () => {
  console.log("server open,", port);
});
