export function ChatButton({ onToggle }: { onToggle: () => void }) {
  return (
    <button
      className="fixed p-3 bottom-4 right-4 bg-violet-400 text-white rounded-2xl shadow-lg hover:scale-125 hover:bg-violet-600 transition"
      type="button"
      onClick={onToggle}
    >
      Chat
    </button>
  );
}
