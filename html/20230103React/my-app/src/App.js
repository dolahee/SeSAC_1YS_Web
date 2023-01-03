import logo from "./logo.svg";
import "./App.css";
import MainHeader from "./components/MainHeader";
import BtnToNaver from "./components/BtnToNaver";
import ImgComponernt from "./components/ImgComponernt";

function App() {
  return (
    <div className="App">
      <div>
        <ImgComponernt />
      </div>
      <BtnToNaver />
    </div>
  );
}

export default App;
