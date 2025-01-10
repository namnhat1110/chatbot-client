import { Button } from "@/components/ui/button";

export function ChatButton({ onToggle }: { onToggle: () => void }) {
  return (
    <Button
      className=" fixed bottom-4 right-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
      onClick={onToggle}
    >
      Chat
    </Button>
  );
}
