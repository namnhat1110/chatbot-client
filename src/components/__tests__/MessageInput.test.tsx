import { render, fireEvent } from "@testing-library/react";
import { MessageInput } from "@/components/MessageInput";

describe("<MessageInput/>", () => {
  it("calls handleSubmit when form is submitted", () => {
    const handleSubmit = vi.fn();
    const setInput = vi.fn();
    const { getByPlaceholderText, getByText } = render(
      <MessageInput
        isLoading={false}
        input="Hello"
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
    );

    fireEvent.change(getByPlaceholderText("Type your message..."), {
      target: { value: "Hello" },
    });
    fireEvent.click(getByText("Send"));

    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});
