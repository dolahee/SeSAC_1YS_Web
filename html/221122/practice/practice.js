const express = require("express");
const app = express();
const port = 8080;

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
