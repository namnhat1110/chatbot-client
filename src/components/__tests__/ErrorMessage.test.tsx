import { render } from "@testing-library/react";
import { ErrorMessage } from "@/components/ErrorMessage";

describe("<ErrorMessage/>", () => {
  it("renders error message", () => {
    const { getByText } = render(<ErrorMessage message="Error occurred" />);
    expect(getByText("Error occurred")).toBeInTheDocument();
  });
});
