import React from "react";
import { render, screen } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const getColors = () => {
  axiosWithAuth()
    .get("/colors")
    .then((res) => setColorList(res.data))
    .catch((err) => console.log("Error during testing. ", err))
};

let mockGetColors = getColors();
jest.mock(mockGetColors);

test("Bubble application renders", () => {
  render(<BubblePage colors={[]}/>)
})

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  const mockColors = [
    {
      color: "aliceblue",
      code: {
        hex: "#f0f8ff"
      },
      id: 1
    },
    {
      color: "limegreen",
      code: {
        hex: "#99ddbc"
      },
      id: 2
    },
    {
      color: "aqua",
      code: {
        hex: "#00ffff"
      },
      id: 3
    },
    {
      color: "aquamarine",
      code: {
        hex: "#7fffd4"
      },
      id: 4
    },
  ];

  const { rerender } = render(<BubblePage mockColors={[]} />)

  rerender(<BubblePage mockColors={mockColors} />)

  expect(await screen.findByText(/bubbles/i)).toBeInTheDocument();
  expect(await screen.findByText(/colors/i)).toBeInTheDocument();
});
