import React from "react";
import Home from "./App";
import Pdf from "./Pdf";
const queryString = require("query-string");
const parsed = queryString.parse(location.search);
const path = decodeURIComponent(parsed.path ? parsed.path : "home");

const GetView = ({ path }) => {
  let view;
  switch (path) {
    case "home":
      view = <Home />;
      break;
    case "pdf":
      view = <Pdf />;
      break;
    default:
      view = <Home />;
  }
  return view;
};

export default () => {
  return <GetView path={path} />;
};
