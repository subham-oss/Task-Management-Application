import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  ResponsiveContainer, PieChart, Pie, Cell, 
  BarChart, Bar, XAxis, YAxis, Tooltip 
} from "recharts";
import { 
  Clock, CheckCircle, ListTodo, 
  ArrowUpRight, Calendar, Activity 
} from "lucide-react";
import Sidebar from "../components/Sidebar";

// ============================================================================
// Mock Data Sets 
// ============================================================================
const taskStats = { total: 24, pending: 6, inProgress: 8, completed: 10 };

const pieData = [
  { name: "Pending", value: taskStats.pending, color: "#EAB308" },     
  { name: "In Progress", value: taskStats.inProgress, color: "#3B82F6" }, 
  { name: "Completed", value: taskStats.completed, color: "#10B981" },  
];

const priorityData = [
  { name: "Low", Tasks: 7, fill: "#10B981" },
  { name: "Medium", Tasks: 12, fill: "#3B82F6" },
  { name: "High", Tasks: 5, fill: "#EF4444" }
];

const recentTasks = [
  { id: "1", name: "Deploy Auth System Engine", status: "In Progress", priority: "High", date: "2026-07-12" },
  { id: "2", name: "Redesign User Workspace Navigation", status: "Completed", priority: "Medium", date: "2026-07-10" },
  { id: "3", name: "Optimize Redis Caching Layer", status: "Pending", priority: "High", date: "2026-07-14" },
  { id: "4", name: "Draft API Integration Documentation", status: "In Progress", priority: "Low", date: "2026-07-13" },
];

// ============================================================================
// Core Unified Component (Transparent Architecture)
// ============================================================================
export default function Dashboard() {
  const { id = "default-user" } = useParams<{ id?: string }>();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hours = currentTime.getHours();
    if (hours < 12) return "Good Morning";
    if (hours < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Completed": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20";
      case "In Progress": return "bg-blue-500/10 text-blue-500 border-blue-500/20";
      default: return "bg-yellow-500/10 text-yellow-500 border-yellow-500/20";
    }
  };

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-500 font-semibold";
      case "Medium": return "text-blue-500 font-medium";
      default: return "text-emerald-500";
    }
  };

  return (
    <div className="min-h-screen flex bg-transparent transition-colors duration-300">
      
      {/* Left Navigation Workspace Panel */}
      <Sidebar />

      {/* Main App Workspace Canvas */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 overflow-y-auto max-h-screen space-y-8 relative z-10">
        
        {/* 1. Transparent Glass Header Chrono-Greeting Banner */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
          <div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tight">
              {getGreeting()}, <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Developer</span>
            </h1>
            <p className="text-sm opacity-60 mt-1 font-medium">Here is a quick overview of your current team workspace performance parameters.</p>
          </div>
          <div className="flex items-center gap-3 bg-black/5 dark:bg-white/5 px-4 py-2.5 rounded-2xl border border-black/10 dark:border-white/10 shadow-sm shrink-0 self-start md:self-auto">
            <Calendar className="text-blue-500 shrink-0" size={18} />
            <div className="text-right">
              <p className="text-xs opacity-50 font-bold uppercase tracking-wider">Current Time</p>
              <p className="text-sm font-semibold tabular-nums">
                {currentTime.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} &bull;{" "}
                {currentTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
              </p>
            </div>
          </div>
        </header>

        {/* 2. Glassmorphic Metrics Card Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Tasks", value: taskStats.total, icon: <ListTodo size={22} />, color: "text-purple-500" },
            { label: "Pending Tasks", value: taskStats.pending, icon: <Clock size={22} />, color: "text-yellow-500" },
            { label: "In Progress", value: taskStats.inProgress, icon: <Activity size={22} />, color: "text-blue-500" },
            { label: "Completed", value: taskStats.completed, icon: <CheckCircle size={22} />, color: "text-emerald-500" },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center justify-between shadow-sm backdrop-blur-sm"
            >
              <div className="space-y-2">
                <p className="text-sm font-medium opacity-70">{card.label}</p>
                <h3 className="text-3xl font-bold tracking-tight tabular-nums">{card.value}</h3>
              </div>
              <div className={`p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 shadow-sm shrink-0 ${card.color}`}>
                {card.icon}
              </div>
            </motion.div>
          ))}
        </section>

        {/* 3. Transparent Graphical Charts Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Side: Distribution Pie Analysis Chart */}
          <div className="lg:col-span-5 p-6 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold tracking-tight">Task Distribution</h3>
              <p className="text-xs opacity-50 font-medium">Volume breakdown mapped by phase indicators</p>
            </div>
            <div className="w-full h-[280px] flex items-center justify-center relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={pieData} cx="50%" cy="50%" innerRadius={70} outerRadius={95} paddingAngle={4} dataKey="value">
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="transparent" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ background: "rgba(0,0,0,0.85)", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="absolute text-center select-none pointer-events-none">
                <p className="text-3xl font-black tracking-tight">{taskStats.total}</p>
                <p className="text-[10px] uppercase font-bold tracking-widest opacity-40 mt-0.5">Active</p>
              </div>
            </div>
            <div className="flex justify-center gap-6 border-t border-black/5 dark:border-white/5 pt-4">
              {pieData.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-xs font-semibold opacity-70">{item.name} ({item.value})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Priority Level Tracking Bar Graph */}
          <div className="lg:col-span-7 p-6 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-bold tracking-tight">Task Load Priority Index</h3>
              <p className="text-xs opacity-50 font-medium">Task assignments organized by severity parameters</p>
            </div>
            <div className="w-full h-[280px] mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={priorityData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                  <XAxis dataKey="name" stroke="currentColor" opacity={0.4} fontSize={12} tickLine={false} />
                  <YAxis stroke="currentColor" opacity={0.4} fontSize={12} tickLine={false} />
                  <Tooltip
                    cursor={{ fill: "rgba(255,255,255,0.05)" }}
                    contentStyle={{ background: "rgba(0,0,0,0.85)", border: "none", borderRadius: "12px", color: "#fff", fontSize: "12px" }}
                  />
                  <Bar dataKey="Tasks" radius={[6, 6, 0, 0]} barSize={45} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="border-t border-black/5 dark:border-white/5 pt-4 flex justify-between items-center text-xs font-medium opacity-50">
              <span>Graph Indicator Metric: Volume Counts</span>
              <span>Real-time Sync Active</span>
            </div>
          </div>
        </section>

        {/* 4. Glassmorphic Recent Task Micro-Table Pipeline */}
        <section className="p-6 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
            <div>
              <h3 className="text-lg font-bold tracking-tight">Recent Workspace Tasks</h3>
              <p className="text-xs opacity-50 font-medium">Review parameters for recently instantiated operational directives</p>
            </div>
            <Link
              to={`/dashboard/${id}/tasks`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition text-xs font-semibold shadow-md shadow-blue-600/10 select-none group"
            >
              See All Tasks 
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Responsive Scrolling Container Wrapper */}
          <div className="w-full overflow-x-auto rounded-xl border border-black/10 dark:border-white/10 bg-transparent">
            <table className="w-full text-left text-sm border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 text-xs font-bold uppercase tracking-wider opacity-60">
                  <th className="p-4">Task Context Identifiers</th>
                  <th className="p-4">Status Phase</th>
                  <th className="p-4">Created Chrono Date</th>
                  <th className="p-4">Priority Rank</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 dark:divide-white/10">
                {recentTasks.map((task) => (
                  <tr key={task.id} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 font-semibold">{task.name}</td>
                    <td className="p-4">
                      <span className={`px-2.5 py-1 text-xs font-bold rounded-lg border uppercase tracking-wider ${getStatusStyle(task.status)}`}>
                        {task.status}
                      </span>
                    </td>
                    <td className="p-4 opacity-70 font-medium tabular-nums">{task.date}</td>
                    <td className={`p-4 text-xs font-bold uppercase tracking-wide ${getPriorityStyle(task.priority)}`}>
                      {task.priority}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}