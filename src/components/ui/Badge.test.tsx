import { render, screen } from "@testing-library/react";
import { Badge } from "./Badge";

describe("Badge Component", () => {
  it("renders correctly with default variant", () => {
    render(<Badge>Test Badge</Badge>);
    const badge = screen.getByText("Test Badge");
    expect(badge).toBeInTheDocument();
    // It should have some default classes
    expect(badge).toHaveClass("inline-flex", "items-center");
  });

  it("renders correctly with different variants", () => {
    render(<Badge variant="accent">Accent Badge</Badge>);
    const badge = screen.getByText("Accent Badge");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass("bg-accent/10", "text-accent");
  });
});
