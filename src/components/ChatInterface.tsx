import React, { useState, useEffect } from "react";
import { useHandleChat } from "@/hooks/useHandleChat";
import { MessageInput } from "@/components/MessageInput";
import { MessageDisplay } from "@/components/MessageDisplay";
import { ErrorMessage } from "@/components/ErrorMessage";
import { ChatButton } from "@/components/ChatButton";

export const ChatInterface: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const { messages, isLoading, error, sendMessage, loadHistory } =
    useHandleChat();

  const toggleChat = () => {
    setIsVisible(!isVisible);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    await sendMessage(input);
    setInput("");
  };

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  return (
    <div className="fixed bottom-4 right-4 w-full p-4 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
      <div
        className={`bg-white shadow-lg rounded-lg p-4 mt-2 transition-all duration-500 ease-in-out transform ${
          isVisible
            ? "opacity-100 -translate-y-10 -translate-x-16"
            : "opacity-0 translate-y-0 translate-x-0"
        }`}
      >
        {error && <ErrorMessage message={error} />}

        <MessageDisplay isLoading={isLoading} messages={messages} />

        <MessageInput
          isLoading={isLoading}
          input={input}
          setInput={setInput}
          handleSubmit={handleSubmit}
        />
      </div>

      <ChatButton onToggle={toggleChat} />
    </div>
  );
};
