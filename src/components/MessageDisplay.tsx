import { useEffect, useRef } from "react";
import { IMessage } from "@/types";
import ReactMarkdown from "react-markdown";

export function MessageDisplay({
  isLoading,
  messages,
}: {
  isLoading: boolean;
  messages: IMessage[];
}) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="h-96 overflow-y-auto overflow-x-hidden mb-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`mb-4 transition-all duration-300 ease-in-out transform ${
            msg.role === "user" ? "text-right" : "text-left"
          }`}
        >
          <div
            className={`inline-block p-2 rounded-lg max-w-xl ${
              msg.role === "user"
                ? "bg-blue-500 text-white animate-slide-in-right "
                : "bg-gray-300 animate-slide-in-left"
            }`}
          >
            <ReactMarkdown>{msg.content}</ReactMarkdown>
          </div>
        </div>
      ))}
      {isLoading && (
        <div className="text-center">
          <div className="animate-pulse">Thinking...</div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
}
