const express = require("express");
const session = require("express-session");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.use("/views", express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "1234", // 임의의 문자열로 세션을 암호화 함.
    resave: false, // true: 모든 요청마다 session에 변화가 없어도 session을 다시 저장함.
    saveUninitialized: true, // 초기화되지 않은 세션을 저장하냐 마냐
    // cookie:{ // session id 쿠키에 대한 옵션
    //     httpOnly:true,
    //     maxAge:,
    // },
    // secure: // true일 경우 보안 서버에서만 작동
  })
);

app.get("/", (req, res) => {
  if (req.session.user) res.render("index", { isLogin: true });
  else res.render("index", { isLogin: false });
  res.send("세션 수업");
});

const user = { id: "a", pw: "1" };

app.post("/login", (req, res) => {
  if (req.body.id == user.id && req.body.pw == user.pw) {
    req.session.user = req.body.id;
    res.send("로그인 성공");
  } else {
    res.send("로그인 실패");
  }
  res.send("세션 생성 성공");
});

app.destory("/logout", (req, res) => {
  req.session.destory(function (err) {
    if (err) throw err;
    res.send("로그아웃 성공");
  });
});

// app.get("/setSession", (req, res) => {
//   req.session.user = "id";
//   res.send("세션 생성 성공");
// });

app.listen(port, () => {
  console.log("server open,", port);
});
