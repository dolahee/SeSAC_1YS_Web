//$은 jquery에서 지목을 시작할때 사용됨
//$(document)는 문서 자체를 지목한거
//document === 문서
//ready === 준비

// $(document).ready(함수)는
// 문서가 준비가 되었을때, 즉 브라우저에서 '문서'가 정상적으로 열린 후에
// "함수"를 실행 시켜 줍니다.
// 그래서 중복으로 사용할 필요가 없이 한번 선언해주고 쭉 넣으시면 됩니다.

$(document).ready(function () {
  // mouse 마우스, move 움직이다
  // 문서 내에서 마우스의 움직임을 감지할때 주로 사용함
  // jquery꺼 아님 javascript꺼임

  // 1. 마우스 움직임 감지 이벤트
  $(document).mousemove(function (event) {
    // 마우스가 움직일때마다
    // event = {..... screenX, screenY, pageX, pageY, offsetX, offSetY, x, y}

    var mouseX = event.pageX;
    var mouseY = event.pageY;

    $(".cursor").css({
      left: mouseX + "px",
      top: mouseY + "px",
    });
  });

  // 2. 맨 위로 보내기 이벤트
  // 문서가 정상적으로 화면에 보이게 되면
  // 님은 button을 숨긴다를 하셨음
  $(".btn_shop").hide();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      // 페이드 인
      $(".btn_shop").fadeIn();
    } else {
      // 페이드 아웃
      $(".btn_shop").fadeOut();
    }
  });

  // 3. 위로 보내버리기
  // 힌트 1)
  // 버튼을 "클릭" 했을때 우리는 스크롤 값을 0으로 만들어 버려야 해요
  // javascript 방식
  // 이벤트를 더해준다 addEventListner
  // const button = document.querySelector(".btn_shop");
  // button.addEventListener("click", function () {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // });

  // jquery 방식
  // jquery에는 animate라는 함수가 있음
  // 애니메이션을 만들때 주로 사용함
  // 막 회전하기도 가능
  // animate(css 속성, 애니메이션 동작시간)

  $(".btn_shop").click(function () {
    $("html, body").animate({ scrollTop: 10 }, 10000);
  });

  const alertPlaceholder = $("#liveAlertPlaceholder");
  function alert(message, type) {
    const wrapper = document.createElement("div");
    (wrapper.innerHTML = `<div class="alert alert-${type} alert-dismissible" role="alert">`),
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
      alertPlaceholder.append(wrapper);
  }

  const alertTrigger = document.getElementById("liveAlertBtn");
  if (alertTrigger) {
    alertTrigger.addEventListener("click", () => {
      alert("Nice, you triggered this alert message!", "success");
    });
  }
});

// const 사람 = {
//   이름: "홍선기",
//   나이: "30",
//   외모: "못생김",
//   키: 172,
//   반려견키우는지: false,
//   주소: "서울시 관악구 신림동",
// };

// console.log(사람.이름);

// 아까 저것도 똑같음

// const event = {
//   screenX : 0,
//   screenY : 0,
//   x : 0,
//   y : 0,
//   .........
// }
