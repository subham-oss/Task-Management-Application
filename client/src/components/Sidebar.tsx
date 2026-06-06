import {
  LayoutDashboard,
  CheckSquare,
  FolderKanban,
  Calendar,
  BarChart3,
  Users,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";

const menu = [
  { icon: LayoutDashboard, name: "Dashboard", active: true },
  { icon: CheckSquare, name: "Tasks" },
  { icon: FolderKanban, name: "Projects" },
  { icon: Calendar, name: "Calendar" },
  { icon: BarChart3, name: "Analytics" },
  { icon: Users, name: "Team" },
  { icon: Bell, name: "Notifications" },
  { icon: Settings, name: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-indigo-600">
          TaskFlow
        </h1>
        <p className="text-sm text-slate-500">
          Stay Organized
        </p>
      </div>

      <nav className="px-4 flex-1">
        {menu.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-3 p-3 rounded-xl mb-2 transition-all
            ${
              item.active
                ? "bg-indigo-600 text-white"
                : "hover:bg-slate-100 dark:hover:bg-slate-800"
            }`}
          >
            <item.icon size={18} />
            {item.name}
          </button>
        ))}
      </nav>

      <div className="p-4">
        <button className="flex items-center gap-3 text-red-500">
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}