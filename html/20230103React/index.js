// React 따라하기

function HelloWorldButton() {
  return React.createElement(
    "button",
    { onClick: () => {} },
    "Hello, REACT world!"
  );
}

const e = React.createElement;
const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);
root.render(e(HelloWorldButton));

function HelloWorldButton2() {
  const [isClick, setClickState] = React.useState("It isn't clicked");
  console.log(isClick);

  return React.createElement(
    "button",
    {
      onClick: () => {
        setClickState("It's clicked");
      },
    },
    isClick
  );
}

const e2 = React.createElement;
const domContainer2 = document.querySelector("#app2");
const root2 = ReactDOM.createRoot(domContainer2);
root2.render(e2(HelloWorldButton2));

//Javascript XML = JSX 코드
