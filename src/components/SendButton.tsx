import { Button } from "@/components/ui/button";

export function SendButton({ onSend }: { onSend: () => void }) {
  return (
    <Button
      onClick={onSend}
      className="bg-blue-500 h-full text-white p-2 rounded-r-lg shadow-lg hover:bg-blue-600 transition"
    >
      Send
    </Button>
  );
}
