import React from "react";
import { render } from "@testing-library/react";
import styled from "styled-components52";

const TestComponent = styled.div`
  background-color: #0000ff;
`;

test("Get computed style", () => {
  const testComponent = render(
    <TestComponent data-testid="test" />
  ).getByTestId("test");

  expect(window.getComputedStyle(testComponent).backgroundColor).toBe(
    "rgb(0, 0, 255)"
  );
});
