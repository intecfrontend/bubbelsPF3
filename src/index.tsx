import * as React from "react";
import { render } from "react-dom";
import { Example } from "./Example";
import ReactDOM from "react-dom";
<link id="favicon" href="letmesee.svg"></link>;
import "./index.css";

const App = () => <Example />;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
