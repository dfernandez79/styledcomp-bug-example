import React from "react";
import { render } from "@testing-library/react";
import styled, { createGlobalStyle } from "styled-components511";

const TestComponent = styled.div`
  background-color: #0000ff;
`;

test("5.1.1: Get computed style", () => {
  const testComponent = render(
    <TestComponent data-testid="test" />
  ).getByTestId("test");

  expect(window.getComputedStyle(testComponent).backgroundColor).toBe(
    "rgb(0, 0, 255)"
  );
});

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Test;
  }
`;

test("5.1.1: Global Styles", () => {
  render(<GlobalStyles />);
  expect(window.getComputedStyle(document.body).fontFamily).toBe("Test");
});
