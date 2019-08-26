import React from "react";
import ReactDOM from "react-dom";
import Ziget from "./Ziget";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Ziget />, div);
  ReactDOM.unmountComponentAtNode(div);
});
