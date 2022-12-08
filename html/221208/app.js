const express = require("express");
const cookieParser = require("cookie-parser"); // "cookie-parser" 불러오기
const app = express();
const port = 8000;

app.use(cookieParser()); //  "cookie-parser" 사용명령어

app.get("/", (req, res) => {
  res.send("hello");
});

//쿠키 팝업창

// app.get("/", (req, res) => {
//     if(res.cookies.NM_P)     res.render("esj 파일명",{popup:"none"});
//     else {res.render("esj 파일명",{popup:"display"});}
//     res.render("esj 파일명");
//   });

//   app.get("/set", (req, res) => {
//     res.cookie("NM_P", "1", option);
//     res.send("쿠키생성성공");
//   });

// document.cookies;

const option = {
  httpOnly: true, // httpOnly가 true일 경우 브라우저 상에서 밑에 생성한 (app.get) 것을  document.cookies  찍어도 보이지 않는다. 자바스크립트 상에서 조작하는 걸 막아 준다.
  maxAge: 30000, // 만들어진 순간부터 여기에 적힌 초만큼(30초) 뒤에 만료가 된다.(ms단위)
  // expires: "2022-12-09T09:00:00" , // GMT 시간 - 2022-12-09T09:00:00 날짜를 적어서 만료일을 정하는 것
  // path: "/visitor", // localhost:8000 < 이 경로에서는 쿠키가 없음, localhost:8000/visitor/~ 그 뒤에 모든 경로에는 쿠키가 있음. default 값은 "/"
  // secure: true , // secure가 true일 경우 https 보안 서버에만 적용됨
  // signed: true // signed가 true일 경우 모든 쿠키 암호화
};

app.get("/set", (req, res) => {
  res.cookie("key", "value", option);
  res.send("쿠키생성성공");
});
//서버에 보내기 때문에 res 객체를 사용 서버가 클라이언트에게 보내는 요청

app.get("/get", (req, res) => {
  console.log(req.cookies);
  console.log(req.cookies.key);
  res.send(req.cookies);
});
//클라이언트에서 쿠키를 가져와야 하기 때문에 req 객체를 사용 클라이언트가 서버에게 보내는 요청

app.listen(port, () => {
  console.log("server open,", port);
});
