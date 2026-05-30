import { Moon, Sun } from "lucide-react";

type Props = {
  dark: boolean;
  toggle: () => void;
};

export default function ThemeToggle({
  dark,
  toggle,
}: Props) {
  return (
    <button
      onClick={toggle}
      className="p-3 rounded-full glass"
    >
      {dark ? (
        <Sun size={18} />
      ) : (
        <Moon size={18} />
      )}
    </button>
  );
}