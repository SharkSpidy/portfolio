import { Moon, Sun } from "lucide-react";
import type { Theme } from "../hooks/useTheme";

export default function ThemeToggle({ theme, onToggle }: { theme: Theme; onToggle: () => void }) {
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
      className="flex h-11 w-11 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-accent hover:text-accent"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
