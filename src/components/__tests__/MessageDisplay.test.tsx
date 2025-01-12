import { render } from "@testing-library/react";
import { MessageDisplay } from "@/components/MessageDisplay";
import { IMessage, Role } from "@/types";

const messages: IMessage[] = [
  { role: Role.USER, content: "Hi" },
  { role: Role.ASSISTANT, content: "Hello" },
];

describe("<MessageDisplay/>", () => {
  const scrollIntoViewMock = vi.fn();
  Element.prototype.scrollIntoView = scrollIntoViewMock;
  it("renders messages", () => {
    const { getByText } = render(
      <MessageDisplay isLoading={false} messages={messages} />
    );
    expect(getByText("Hi")).toBeInTheDocument();
    expect(getByText("Hello")).toBeInTheDocument();
  });

  it("shows loading indicator when isLoading is true", () => {
    const { getByText } = render(
      <MessageDisplay isLoading={true} messages={[]} />
    );
    expect(getByText("Thinking...")).toBeInTheDocument();
  });

  it("scrolls to the end when messages change", () => {
    render(<MessageDisplay isLoading={false} messages={messages} />);
    expect(scrollIntoViewMock).toHaveBeenCalled();
  });
});
