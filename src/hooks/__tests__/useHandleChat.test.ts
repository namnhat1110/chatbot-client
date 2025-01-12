import { renderHook, act } from "@testing-library/react";
import { useHandleChat } from "@/hooks/useHandleChat";
import { ChatAPI } from "@/api/chat.api";
import { Role } from "@/types";

describe("useHandleChat", () => {
  it("should send a message and update messages state", async () => {
    const { result } = renderHook(() => useHandleChat());

    vi.spyOn(ChatAPI, "sendMessage").mockResolvedValue({ response: "Hello" });

    await act(async () => {
      await result.current.sendMessage("Hi");
    });

    expect(result.current.messages).toHaveLength(2);
    expect(result.current.messages[1].content).toBe("Hello");
  });

  it("should load chat history", async () => {
    const { result } = renderHook(() => useHandleChat());

    vi.spyOn(ChatAPI, "getChatHistory").mockResolvedValue([
      { role: Role.USER, content: "Hi" },
    ]);

    await act(async () => {
      await result.current.loadHistory();
    });

    expect(result.current.messages).toHaveLength(1);
    expect(result.current.messages[0].content).toBe("Hi");
  });
});
