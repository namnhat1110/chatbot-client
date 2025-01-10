import { Message } from "@/types";

export function MessageDisplay({ messages }: { messages: Message[] }) {
  return (
    <div className="h-64 overflow-y-auto mb-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`mb-2 ${
            msg.sender === "user" ? "text-right" : "text-left"
          }`}
        >
          <span
            className={`inline-block p-2 rounded-lg ${
              msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {msg.text}
          </span>
        </div>
      ))}
    </div>
  );
}
