import { render, fireEvent } from "@testing-library/react";
import { ChatButton } from "@/components/ChatButton";

describe("<ChatButton/>", () => {
  it("calls onToggle when clicked", () => {
    const onToggle = vi.fn();
    const { getByText } = render(<ChatButton onToggle={onToggle} />);
    fireEvent.click(getByText("Chat"));
    expect(onToggle).toHaveBeenCalledTimes(1);
  });
});
