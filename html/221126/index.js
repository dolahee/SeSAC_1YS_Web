const express = require("express");
const multer = require("multer");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ exrended: true }));
app.use(express.json());
const upload = multer({
  dest: "uploads/",
});

app.get("/file", (req, res) => {
  res.render("file");
});

app.post("/upload", upload.single("userfile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);
  res.send("Upload Conpletr");
});

app.post("/upload-array", upload.array("userfile"), (req, res) => {
  console.log(req.files);
  console.log(req.body);
  res.send("Upload Conpletr");
});
app.post(
  "/upload-fields",
  upload.fields([
    { name: "userfile1" },
    { name: "userfile2" },
    { name: "userfile3" },
  ]),
  (req, res) => {
    console.log(req.files);
    console.log(req.body);
    res.send("Upload Complete");
  }
);
app.get("/", test, test2, (req, res) => {
  console.log("req.name", req.name);
  res.send("Hello");
});

function test(req, res, next) {
  console.log(req.query);
  console.log("테스트 함수입니다.");
  next(); // test 미들웨어 함수가 끝났고, 그 다음을 진행해라.
}

function test2(req, res, next) {
  console.log("test2 함수입니다.");
  next();
}

app.listen(port, () => {
  console.log();
  console.log("Sercer Pore:", port);
});
