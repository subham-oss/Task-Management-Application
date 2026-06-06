import { Search, Bell, Moon } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="relative max-w-lg w-full">
          <Search
            className="absolute left-3 top-3 text-slate-400"
            size={18}
          />

          <input
            placeholder="Search tasks, projects..."
            className="w-full rounded-xl border pl-10 py-3 bg-transparent outline-none"
          />
        </div>

        <div className="flex items-center gap-5">
          <Bell size={20} />
          <Moon size={20} />

          <img
            src="https://i.pravatar.cc/100"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </div>
    </header>
  );
}