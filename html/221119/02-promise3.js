// function login(id, pw, cb) {
//   setTimeout(function () {
//     console.log("사용자입장");
//     cb(id);
//   }, 3000);
// }
// function getVideo(id, cb) {
//   setTimeout(function () {
//     console.log(id + "의 비디오 리스트");
//     cb(["아바타", "라라랜드"]);
//   }, 2000);
// }

// function getDetail(video, cb) {
//   setTimeout(function () {
//     cb("비디오 제목 : " + video);
//   }, 1000);
// }

// function login(id, pw) {
//   return new Promise(function (resolve) {
//     console.log("사용자입장");
//     resolve(id);
//   });
// }

// function getVideo(id) {
//   return new Promise(function (resolve) {
//     console.log(id + "의 비디오 리스트");
//     resolve(["아바타"]);
//   });
// }

// function getDetail(video) {
//   return new Promise(function (resolve) {
//     resolve("비디오제목:" + video);
//   });
// }
// login("박도희").then(function (userId) {
//   getVideo(userId).then(function (videos) {
//     for (var i = 0; i < videos.length; i++) {
//       getDetail(videos[i]).then(function (message) {
//         console.log(message);
//       });
//     }
//   });
// });

function login(id, pw) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("사용자 입장");
      resolve(id);
    }, 3000);
  });
}

function getVideo(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(id + "의 비디오 리스트");
      resolve(["아바타", "라라랜드"]);
    }, 2000);
  });
}
function getDetail(video) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("비디오 제목 : " + video);
    }, 1000);
  });
}

login("박도희", "1234")
  .then(function (user) {
    console.log("user: ", user);
    return getVideo(user);
  })
  .then(function (video) {
    console.log("videos: ", video);
    return getDetail(video[0]);
  })
  .then(function (msg) {
    console.log("msg: ", msg);
  });
