import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import SkillBar from "./SkillBar";

describe("SkillBar", () => {
  it("renders the skill name and level", () => {
    render(<SkillBar name="React" level={90} color="#00d4ff" />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("90%")).toBeInTheDocument();
  });
});
