import React, { useState } from "react";
import { ChatButton } from "@/components/ChatButton";
import { SendButton } from "@/components/SendButton";
import { MessageInput } from "@/components/MessageInput";
import { MessageDisplay } from "@/components/MessageDisplay";
import { Message } from "@/types";

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleChat = () => {
    setIsVisible(!isVisible);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: "user" },
      ]);
      setInputValue("");
      // Simulate a bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: "Bot response", sender: "bot" },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 w-[30rem]">
      <div
        className={`bg-white shadow-lg rounded-lg p-4 mt-2 transition-all duration-500 ease-in-out transform ${
          isVisible
            ? "opacity-100 -translate-y-10 -translate-x-16"
            : "opacity-0 translate-y-0 translate-x-0"
        }`}
      >
        <MessageDisplay messages={messages} />
        <div className="flex">
          <MessageInput inputValue={inputValue} setInputValue={setInputValue} />
          <SendButton onSend={handleSendMessage} />
        </div>
      </div>
      <ChatButton onToggle={toggleChat} />
    </div>
  );
};

export default Chatbot;
