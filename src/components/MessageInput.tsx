export function MessageInput({
  inputValue,
  setInputValue,
}: {
  inputValue: string;
  setInputValue: (value: React.SetStateAction<string>) => void;
}) {
  return (
    <input
      type="text"
      className="flex-1 border rounded-lg p-2"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Type a message..."
    />
  );
}
