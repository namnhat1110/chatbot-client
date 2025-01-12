export function MessageInput({
  isLoading,
  input,
  setInput,
  handleSubmit,
}: {
  isLoading: boolean;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: React.FormEventHandler<HTMLFormElement>;
}) {
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 p-2 border rounded"
        placeholder="Type your message..."
        disabled={isLoading}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-blue-300"
        disabled={isLoading}
      >
        Send
      </button>
    </form>
  );
}
