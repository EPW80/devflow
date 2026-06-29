import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the header and defaults to the Kanban board", () => {
    render(<App />);
    expect(screen.getByText("DevFlow")).toBeInTheDocument();
    // API Monitor's panel is not shown until its tab is selected.
    expect(screen.queryByText("Live Fetch")).not.toBeInTheDocument();
  });

  it("switches the visible panel when a nav tab is clicked", () => {
    render(<App />);
    fireEvent.click(screen.getByText("API Monitor"));
    expect(screen.getByText("Live Fetch")).toBeInTheDocument();
  });
});
