import { render, fireEvent } from "@testing-library/react";
import { SendButton } from "@/components/SendButton";
describe("<SendButton/>", () => {
  it("calls onToggle when clicked", () => {
    const onSend = vi.fn();
    const { getByText } = render(<SendButton onSend={onSend} />);
    fireEvent.click(getByText("Send"));
    expect(onSend).toHaveBeenCalledTimes(1);
  });
});
