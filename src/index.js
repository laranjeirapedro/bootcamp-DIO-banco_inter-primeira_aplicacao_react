import React from "react";
import reactDom from "react-dom";
import HelloWorld from "./components/HelloWorld";

reactDom.render(
  <HelloWorld nome={"Pedro"}/>,
  document.getElementById('root')
)