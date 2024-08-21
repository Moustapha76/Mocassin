import "../App.css";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Aside from "../Components/Aside";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Main />
    </div>
  );
}
