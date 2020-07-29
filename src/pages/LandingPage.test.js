  
import React from "react"
import { render } from "@testing-library/react"
import ReactDOM from 'react-dom';
import LandingPage from "./LandingPage"

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

test("renders learn react link", () => {
    ReactDOM.render(<LandingPage />, container);
//   const { getByText } = render(<LandingPage />)
  const headingElement = container.getByText(/Track and Trace/i)
  expect(headingElement).toBeInTheDocument()
})