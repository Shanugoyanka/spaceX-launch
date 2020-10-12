import React from "react";
import ReactDOM from "react-dom";
import queryString from "query-string";

import "./index.css";
import App from "../App";
import * as serviceWorker from "./serviceWorker";
async function getData(launch_success, land_success, launch_year) {
  let list = await fetch(
    `https://api.spaceXdata.com/v3/launches?limit=100&launch_success=${launch_success}&land_success=${land_success}&launch_year=${launch_year}`
  );
  list = await list.json();
  return list;
}

async function hydrate() {
  var query =
    typeof document === "undefined"
      ? {}
      : queryString.parse(window.location.search);
  let { launch_success, land_success, launch_year } = query;
  launch_success = launch_success || "";
  land_success = land_success || "";
  launch_year = launch_year || "";
  const list = await getData(launch_success, land_success, launch_year);
  ReactDOM.hydrate(
    <App
      list={list}
      land_success={land_success}
      launch_success={launch_success}
      launch_year={launch_year}
    />,
    document.getElementById("root")
  );
}

hydrate();
serviceWorker.register();
