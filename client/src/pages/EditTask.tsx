import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ArrowLeft, Save, X, FileText, 
  Layers, AlertTriangle, Calendar 
} from "lucide-react";
import Sidebar from "../components/Sidebar";

// ============================================================================
// Mock Task Discovery Engine (Simulating API fetch target)
// ============================================================================
const mockTasksRepository = [
  { id: "1", name: "Deploy Auth System Engine", description: "Migrate traditional JSON web token protocols into dynamic decentralized OAuth validation loops.", status: "In Progress", priority: "High", date: "2026-07-12" },
  { id: "2", name: "Redesign User Workspace Navigation", description: "Optimize structural collapse animations and integrate centralized state management adapters.", status: "Completed", priority: "Medium", date: "2026-07-10" },
  { id: "3", name: "Optimize Redis Caching Layer", description: "Formulate sub-second latency key invalidation schedules across heavy relational database paths.", status: "Pending", priority: "High", date: "2026-07-14" },
];

// ============================================================================
// Core Unified Component
// ============================================================================
export default function EditTask() {
  const { id = "default-user", taskId } = useParams<{ id: string; taskId: string }>();
  const navigate = useNavigate();

  // Form Field State Pipeline
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Pending");
  const [priority, setPriority] = useState("Medium");
  const [date, setDate] = useState("");

  // Simulate lifecycle API loading hook parameters
  useEffect(() => {
    const targetTask = mockTasksRepository.find(t => t.id === taskId) || mockTasksRepository[0];
    if (targetTask) {
      setName(targetTask.name);
      setDescription(targetTask.description);
      setStatus(targetTask.status);
      setPriority(targetTask.priority);
      setDate(targetTask.date);
    }
  }, [taskId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const updatedPayload = { taskId, name, description, status, priority, date };
    console.log("Staging synchronized database commits for dynamic payload: ", updatedPayload);
    
    // Smooth return redirection back to the main management deck
    navigate(`/dashboard/${id}/tasks`);
  };

  return (
    <div className="min-h-screen flex bg-transparent transition-colors duration-300">
      
      {/* Left Navigation Workspace Panel */}
      <Sidebar />

      {/* Main App Workspace Canvas */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 overflow-y-auto max-h-screen space-y-8 relative z-10">
        
        {/* 1. Glassmorphic Control Return Header */}
        <header className="flex items-center gap-4 p-6 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
          <Link
            to={`/dashboard/${id}/tasks`}
            className="p-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 transition group"
            title="Return to Tasks Deck"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
          </Link>
          <div>
            <h1 className="text-3xl font-black tracking-tight">Modify Directive</h1>
            <p className="text-sm opacity-60 mt-0.5 font-medium">Updating system records for Task ID Reference: <span className="font-mono text-blue-500 font-bold">{taskId || "1"}</span></p>
          </div>
        </header>

        {/* 2. Form Matrix Layout Workspace */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl p-6 sm:p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md shadow-sm"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Input Element: Task Name */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider opacity-70 flex items-center gap-2">
                <FileText size={14} className="text-blue-500" />
                Task Configuration Title
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ex: Optimize GraphQL Edge Subgraph Pipelines"
                className="w-full px-4 py-3 text-sm rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:outline-none focus:border-blue-500/50 transition text-current"
              />
            </div>

            {/* Input Element: Description */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold uppercase tracking-wider opacity-70 flex items-center gap-2">
                <FileText size={14} className="text-purple-500" />
                Scope of Work Description
              </label>
              <textarea
                required
                rows={4}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Outline explicit technical details, acceptance criteria, and system constraints here..."
                className="w-full px-4 py-3 text-sm rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:outline-none focus:border-blue-500/50 transition text-current resize-none leading-relaxed"
              />
            </div>

            {/* Selector Grid Row Array */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Select Element: Status */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider opacity-70 flex items-center gap-2">
                  <Layers size={14} className="text-yellow-500" />
                  Operational State
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:outline-none focus:border-blue-500/50 transition text-current cursor-pointer"
                >
                  <option value="Pending" className="dark:bg-neutral-900 text-black dark:text-white">Pending</option>
                  <option value="In Progress" className="dark:bg-neutral-900 text-black dark:text-white">In Progress</option>
                  <option value="Completed" className="dark:bg-neutral-900 text-black dark:text-white">Completed</option>
                </select>
              </div>

              {/* Select Element: Priority */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider opacity-70 flex items-center gap-2">
                  <AlertTriangle size={14} className="text-red-500" />
                  Severity Index
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:outline-none focus:border-blue-500/50 transition text-current cursor-pointer"
                >
                  <option value="Low" className="dark:bg-neutral-900 text-black dark:text-white">Low Severity</option>
                  <option value="Medium" className="dark:bg-neutral-900 text-black dark:text-white">Medium Severity</option>
                  <option value="High" className="dark:bg-neutral-900 text-black dark:text-white">High Severity</option>
                </select>
              </div>

              {/* Input Element: Chrono Target Due Date */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider opacity-70 flex items-center gap-2">
                  <Calendar size={14} className="text-emerald-500" />
                  Target Delivery Date
                </label>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full px-4 py-3 text-sm rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:outline-none focus:border-blue-500/50 transition text-current calendar-picker-indicator-white"
                />
              </div>

            </div>

            {/* 3. Form Control Executable Operations Array Footer */}
            <div className="pt-6 border-t border-black/5 dark:border-white/5 flex items-center justify-end gap-3">
              <Link
                to={`/dashboard/${id}/tasks`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 transition text-sm font-semibold cursor-pointer"
              >
                <X size={16} />
                Cancel Changes
              </Link>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition text-sm font-semibold shadow-md shadow-blue-600/10 cursor-pointer"
              >
                <Save size={16} />
                Commit Updates
              </button>
            </div>

          </form>
        </motion.div>

      </main>
    </div>
  );
}