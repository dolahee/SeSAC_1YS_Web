// $(document).ready(함수)는
// 문서가 준비가 되었을때, 즉 브라우저에서 '문서'가 정상적으로 열린 후에
// "함수"를 실행 시켜 줍니다.
// 그래서 중복으로 사용할 필요가 없이 한번 선언해주고 쭉 넣으시면 됩니다.
$(document).ready(function () {
  $(".changeImg").hide();
  $(".changeImg2").hide();

  $(window).on("wheel", function (event) {
    // 시작
    // var mainImg = "mainImg.png";
    // var changeImg = "changeImg.jpg";
    // var changeImg2 = "changeImg2.jpg";

    var Y = event.originalEvent.deltaY;
    var current = "main";

    // if (Y > 0) {
    //   console.log("스크롤 내려감");
    //   if (current === "main") {
    //     $(".changeImg").show();
    //     $(".mainImg").hide();
    //     $(".changeImg2").hide();
    //     // 활성화된 이미지를 바꿈
    //     current = "change";
    //   }

    //   if (current === "change") {
    //     $(".changeImg2").show();
    //     $(".mainImg").hide();
    //     $(".changeImg").hide();
    //     // 활성화된 이미지를 바꿈
    //     current = "change2";
    //   }
    // } else {
    //   console.log("스크롤 올라감");
    //   // $(".mainImg").fadeIn();
    //   // $(".changeImg").fadeOut();
    // }
  }); // 끝
});
