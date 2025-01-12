import { render, fireEvent, waitFor } from "@testing-library/react";
import { ChatInterface } from "@/components/ChatInterface";
import * as handleChatHook from "@/hooks/useHandleChat";

describe("<ChatInterface/>", () => {
  const spiedHandleChat = vi.spyOn(handleChatHook, "useHandleChat");
  const mockSendMessage = vi.fn();
  const mockLoadHistory = vi.fn();
  const scrollIntoViewMock = vi.fn();
  Element.prototype.scrollIntoView = scrollIntoViewMock;

  it("renders chat interface and sends message", async () => {
    spiedHandleChat.mockReturnValue({
      messages: [],
      isLoading: false,
      error: null,
      sendMessage: mockSendMessage,
      loadHistory: mockLoadHistory,
    });

    const { getByPlaceholderText, getByText } = render(<ChatInterface />);

    fireEvent.change(getByPlaceholderText("Type your message..."), {
      target: { value: "Hello" },
    });
    fireEvent.click(getByText("Send"));

    await waitFor(() => {
      expect(mockSendMessage).toHaveBeenCalledWith("Hello");
    });
  });
});
