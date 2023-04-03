import logo from "./logo.svg";
import "./App.css";
import Browser from "./browser/browser";
import Mobile from "./mobile/mobile";
import { isBrowser } from "react-device-detect";
import GlobalStyle from "./globalStyle";

function App() {
  const renderPage = () => {
    if (isBrowser) {
      return <Browser />;
    } else {
      return <Mobile />;
    }
  };

  return (
    <div>
      <div>{renderPage()}</div>
      <GlobalStyle />
    </div>
  );
}

export default App;
