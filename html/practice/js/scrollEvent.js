$(document).ready(function () {
  $(window).on("wheel", function (event) {
    // 시작
    var Y = event.originalEvent.deltaY;

    // var mainImg = "mainImg.png";
    // var changeImg = "changeImg.jpg";
    // var changeImg2 = "changeImg2.jpg";

    $(".changeImg").fadeOut();
    if (Y > 0) {
      $(".mainImg").fadeOut();
      $(".changeImg").fadeIn();
      console.log("스크롤 내려감");
    } else {
      console.log("스크롤 올라감");
      $(".mainImg").fadeIn();
      $(".changeImg").fadeOut();
    }
  }); // 끝
});
