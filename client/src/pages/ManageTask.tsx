import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, SlidersHorizontal, Calendar, 
  AlertCircle, CheckCircle2, Clock, 
  Plus, Edit3, Trash2 
} from "lucide-react";
import Sidebar from "../components/Sidebar";

// ============================================================================
// Mock Task Dataset 
// ============================================================================
interface Task {
  id: string;
  name: string;
  description: string;
  status: "Pending" | "In Progress" | "Completed";
  priority: "High" | "Medium" | "Low";
  date: string;
}

const initialTasks: Task[] = [
  { id: "1", name: "Deploy Auth System Engine", description: "Migrate traditional JSON web token protocols into dynamic decentralized OAuth validation loops.", status: "In Progress", priority: "High", date: "2026-07-12" },
  { id: "2", name: "Redesign User Workspace Navigation", description: "Optimize structural collapse animations and integrate centralized state management adapters.", status: "Completed", priority: "Medium", date: "2026-07-10" },
  { id: "3", name: "Optimize Redis Caching Layer", description: "Formulate sub-second latency key invalidation schedules across heavy relational database paths.", status: "Pending", priority: "High", date: "2026-07-14" },
  { id: "4", name: "Draft API Integration Documentation", description: "Generate comprehensive Postman mock pipelines detailing asynchronous webhook responses.", status: "In Progress", priority: "Low", date: "2026-07-13" },
  { id: "5", name: "Refactor UI Tailwinds Infrastructure", description: "Standardize atomic spacing modifiers and global glassmorphic style arrays across client viewports.", status: "Pending", priority: "Medium", date: "2026-07-18" },
  { id: "6", name: "Execute End-to-End Cypress Audits", description: "Stress test isolated workspace authentication boundaries under automated cluster failures.", status: "Completed", priority: "High", date: "2026-07-09" }
];

// ============================================================================
// Core Unified Component (Transparent Sidebar Layout Context)
// ============================================================================
export default function ManageTasks() {
  const { id = "default-user" } = useParams<{ id?: string }>();
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<"All" | "Pending" | "In Progress" | "Completed">("All");

  const handleDeleteTask = (taskId: string) => {
    setTasks(prev => prev.filter(task => task.id !== taskId));
  };

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const matchesStatus = activeFilter === "All" || task.status === activeFilter;
      const matchesSearch = task.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            task.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [tasks, activeFilter, searchQuery]);

  const getStatusMeta = (status: Task["status"]) => {
    switch (status) {
      case "Completed":
        return { icon: <CheckCircle2 size={16} />, style: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" };
      case "In Progress":
        return { icon: <Clock size={16} />, style: "bg-blue-500/10 text-blue-400 border-blue-500/20" };
      default:
        return { icon: <AlertCircle size={16} />, style: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20" };
    }
  };

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "High": return "text-red-400 border-red-500/20 bg-red-500/5";
      case "Medium": return "text-blue-400 border-blue-500/20 bg-blue-500/5";
      default: return "text-emerald-400 border-emerald-500/20 bg-emerald-500/5";
    }
  };

  return (
    <div className="min-h-screen flex bg-transparent transition-colors duration-300">
      
      {/* Left Navigation Workspace Panel */}
      <Sidebar />

      {/* Main App Workspace Canvas */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 overflow-y-auto max-h-screen space-y-8 relative z-10">
        
        {/* 1. Glassmorphic Header Control Banner */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
          <div>
            <h1 className="text-3xl font-black tracking-tight">Manage Tasks</h1>
            <p className="text-sm opacity-60 mt-1 font-medium">Create, modify, view, and audit operational tasks across your engine environment.</p>
          </div>
          <Link
            to={`/dashboard/${id}/create`}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition font-semibold text-sm shadow-lg shadow-blue-600/20 shrink-0 self-start sm:self-auto select-none"
          >
            <Plus size={18} />
            Create New Task
          </Link>
        </header>

        {/* 2. Interactive Search & Filtration Bar */}
        <section className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
          
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none" size={18} />
            <input
              type="text"
              placeholder="Search tasks by name or description parameter context..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:outline-none focus:border-blue-500/50 transition placeholder:opacity-50 text-current"
            />
          </div>

          <div className="flex flex-wrap items-center gap-1.5 bg-black/5 dark:bg-white/5 p-1 rounded-xl border border-black/5 dark:border-white/5">
            {(["All", "Pending", "In Progress", "Completed"] as const).map((filterOpt) => (
              <button
                key={filterOpt}
                onClick={() => setActiveFilter(filterOpt)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition select-none cursor-pointer ${
                  activeFilter === filterOpt
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/15"
                    : "hover:bg-black/5 dark:hover:bg-white/5 opacity-70 hover:opacity-100"
                }`}
              >
                {filterOpt}
              </button>
            ))}
          </div>
        </section>

        {/* 3. Task Management Matrix Cards Display Grid */}
        <motion.section layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredTasks.map((task) => {
              const statusMeta = getStatusMeta(task.status);
              return (
                <motion.div
                  key={task.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md flex flex-col justify-between group shadow-sm relative overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider rounded-md border ${statusMeta.style}`}>
                        {statusMeta.icon}
                        {task.status}
                      </span>
                      <span className={`px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest rounded-md border ${getPriorityColor(task.priority)}`}>
                        {task.priority} Priority
                      </span>
                    </div>

                    <h3 className="text-lg font-bold tracking-tight line-clamp-1 group-hover:text-blue-500 transition-colors">
                      {task.name}
                    </h3>
                    <p className="text-sm opacity-60 font-medium mt-2 line-clamp-3 leading-relaxed">
                      {task.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 opacity-50 text-xs font-semibold tabular-nums">
                      <Calendar size={14} className="text-blue-500" />
                      <span>Due: {task.date}</span>
                    </div>
                    
                    <div className="flex items-center gap-1">
                      <button 
                        title="Edit Task Context Parameters"
                        className="p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-blue-600/10 border border-black/5 dark:border-white/5 hover:text-blue-400 transition cursor-pointer"
                      >
                        <Edit3 size={14} />
                      </button>
                      <button 
                        onClick={() => handleDeleteTask(task.id)}
                        title="Terminate/Purge Task Directive"
                        className="p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-red-600/10 border border-black/5 dark:border-white/5 hover:text-red-400 transition cursor-pointer"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Empty Table/Grid Filter Exception State */}
          {filteredTasks.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-16 text-center border border-dashed border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 rounded-3xl backdrop-blur-md"
            >
              <SlidersHorizontal className="mx-auto opacity-30 mb-4" size={32} />
              <h4 className="text-lg font-bold">No active tasks match parameters</h4>
              <p className="text-sm opacity-50 font-medium max-w-sm mx-auto mt-1">Adjust your search input string keywords or adjust your filter selection metrics.</p>
            </motion.div>
          )}
        </motion.section>

      </main>
    </div>
  );
}