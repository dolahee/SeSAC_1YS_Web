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
    secret: "1234",
    resave: false,
    saveUninitialized: true,
  })
);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/signin", (req, res) => {
  res.render("signin");
});

const user = { id: "a", pw: "1" };

app.post("/login", (req, res) => {
  if (req.body.id == user.id && req.body.pw == user.pw) {
    req.session.user = req.body.id;
    res.send("ok");
  } else {
    res.send("fail");
  }
});

app.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("로그아웃 성공");
  });
});

app.listen(port, () => {
  console.log("server open,", port);
});
