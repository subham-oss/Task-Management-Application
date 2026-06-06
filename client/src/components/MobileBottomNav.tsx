import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  FolderKanban,
  MoreHorizontal,
} from "lucide-react";

const navItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    active: true,
  },
  {
    icon: CheckSquare,
    label: "Tasks",
  },
  {
    icon: Calendar,
    label: "Calendar",
  },
  {
    icon: FolderKanban,
    label: "Projects",
  },
  {
    icon: MoreHorizontal,
    label: "More",
  },
];

export default function MobileBottomNav() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`flex flex-col items-center justify-center gap-1 text-xs transition-all
            ${
              item.active
                ? "text-indigo-600"
                : "text-slate-500"
            }`}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}