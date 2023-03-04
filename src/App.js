import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "react-bootstrap";
import "./App.css";
import Bottom from "./Components/Bottom/Bottom";
import DownNav from "./Components/DownNav/DownNav";
import Middle from "./Components/Middile/Middle";
import Top from "./Components/Top/Top";


function App() {
  return (
    <div className="App">
      {/* <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      > */}
        <Top />
        <Middle />
        <Bottom />
        <DownNav />
      {/* </ThemeProvider> */}
    </div>
  );
}

export default App;
