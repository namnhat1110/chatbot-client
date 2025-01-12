import { useState, useCallback } from "react";
import { IMessage, Role } from "@/types";
import { ChatAPI } from "@/api/chat.api";

interface HandleChatHook {
  messages: IMessage[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  loadHistory: () => Promise<void>;
}

export const useHandleChat = (): HandleChatHook => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const userMessage: IMessage = { role: Role.USER, content };
      setMessages((prev) => [...prev, userMessage]);

      const response = await ChatAPI.sendMessage(content);

      const aiMessage: IMessage = {
        role: Role.ASSISTANT,
        content: response.response,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
      console.error("Send message error:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loadHistory = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const history = await ChatAPI.getChatHistory();
      setMessages(history);
    } catch (error) {
      setError(
        error instanceof Error ? error.message : "Failed to load chat history"
      );
      console.error("Load history error:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    loadHistory,
  };
};
