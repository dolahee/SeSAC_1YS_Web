const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const port = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ exrended: true }));
app.use(express.json());

// const upload = multer({
//   dest: "uploads/",
// });

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "uploads/");
//     },
//     filename(req, file, done) {
//       console.log("file name :", req.body);
//       const ext = path.extname(file.originalname);
//       const filename = req.body.name + ext;
//     },
//   }),
// });

// 실습1
// app.use("/public", express.static("staic"));

// const upload = multer({
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       done(null, "staic/img/");
//     },
//     filename(req, file, done) {
//       console.log("filename : ", req.body);
//       const ext = path.extname(file.originalname);
//       const filename = req.body.id + ext;
//       done(null, filename);
//     },
//   }),
// });

// app.get("/01-practuce", (req, res) => {
//   res.render("01-practuce");
// });

// app.post("/01-practuce", upload.single("userfile"), (req, res) => {
//   console.log(req.file);
//   console.log(req.body);
//   res.render("img", { path: req.body.id });
// });

// ↑실습

//실습2
app.use("/public", express.static("staic"));
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, "staic/img/");
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, req.body.id + ext);
    },
  }),
});

app.get("/02-practuce", (req, res) => {
  res.render("02-practuce");
});

app.post("/02-practuce", upload.single("userfile"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.send(
    `<img width="800" height="800" src="/public/img/${req.body.id}.jpg" />`
  );
});

// ↑실습

app.get("/file", (req, res) => {
  res.render("file");
});

// app.post("/upload", upload.single("userfile"), (req, res) => {
//   console.log(req.file);
//   console.log(req.body);
//   res.send("Upload Conpletr");
// });

// app.post("/upload-array", upload.array("userfile"), (req, res) => {
//   console.log(req.files);
//   console.log(req.body);
//   res.send("Upload Conpletr");
// });
// app.post(
//   "/upload-fields",
//   upload.fields([
//     { name: "userfile1" },
//     { name: "userfile2" },
//     { name: "userfile3" },
//   ]),
//   (req, res) => {
//     console.log(req.files);
//     console.log(req.body);
//     res.send("Upload Complete");
//   }
// );
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
