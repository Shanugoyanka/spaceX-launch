import React from "react";
import ReactDom from "react-dom";

import Card from "../";
import launch from '../../../mock.json'

import "@testing-library/jest-dom/extend-expect";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDom.render(<Card launch={launch[0]}/>, div);
});
