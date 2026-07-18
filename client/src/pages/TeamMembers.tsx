import { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  UserPlus,
  Mail,
  Shield,
  MapPin,
  Activity,
  Trash2,
  ShieldCheck,
} from "lucide-react";
import Sidebar from "../components/Sidebar";

// ============================================================================
// Mock Team Dataset
// ============================================================================
interface TeamMember {
  id: string;
  name: string;
  email: string;
  role: "Admin" | "Lead Developer" | "UI/UX Designer" | "DevOps Engineer";
  status: "Active" | "Out of Office" | "Idle";
  location: string;
  avatar: string;
}

const initialMembers: TeamMember[] = [
  {
    id: "1",
    name: "Alex Mercer",
    email: "alex.m@taskflow.com",
    role: "Admin",
    status: "Active",
    location: "San Francisco, CA",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: "2",
    name: "Sarah Connor",
    email: "sarah.c@taskflow.com",
    role: "Lead Developer",
    status: "Active",
    location: "Austin, TX",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: "3",
    name: "David Kim",
    email: "david.k@taskflow.com",
    role: "UI/UX Designer",
    status: "Idle",
    location: "Vancouver, BC",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250&auto=format&fit=crop",
  },
  {
    id: "4",
    name: "Elena Rostova",
    email: "elena.r@taskflow.com",
    role: "DevOps Engineer",
    status: "Out of Office",
    location: "Berlin, DE",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=250&auto=format&fit=crop",
  },
];

// ============================================================================
// Core Unified Component
// ============================================================================
export default function TeamMembers() {
  const { id = "default-user" } = useParams<{ id?: string }>();
  const [members, setMembers] = useState<TeamMember[]>(initialMembers);
  const [searchQuery, setSearchQuery] = useState("");

  // Remove a member from the client state tracking view
  const handleRemoveMember = (memberId: string) => {
    setMembers((prev) => prev.filter((member) => member.id !== memberId));
  };

  // Filter team collection by matching context parameters
  const filteredMembers = useMemo(() => {
    return members.filter(
      (member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()),
    );
  }, [members, searchQuery]);

  // Color mapper utility for state parameters
  const getStatusStyle = (status: TeamMember["status"]) => {
    switch (status) {
      case "Active":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Out of Office":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    }
  };

  return (
    <div className="min-h-screen flex bg-transparent transition-colors duration-300">
      {/* Left Navigation Workspace Panel */}
      <Sidebar />

      {/* Main App Workspace Canvas */}
      <main className="flex-1 min-w-0 p-4 sm:p-6 md:p-8 overflow-y-auto max-h-screen space-y-8 relative z-10">
        {/* 1. Glassmorphic Control Header Banner */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
          <div>
            <h1 className="text-3xl font-black tracking-tight">Team Members</h1>
            <p className="text-sm opacity-60 mt-1 font-medium">
              Manage cross-functional permissions, assign operational structural
              seats, and oversee members.
            </p>
          </div>
          <button
            onClick={() =>
              console.log("Instantiating outbound team invitation sequence.")
            }
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 transition font-semibold text-sm shadow-lg shadow-blue-600/20 shrink-0 self-start sm:self-auto select-none cursor-pointer"
          >
            <UserPlus size={18} />
            Invite Member
          </button>
        </header>

        {/* 2. Live Keyword Filter Utility Bar */}
        <section className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md">
          <div className="relative w-full">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 opacity-40 pointer-events-none"
              size={18}
            />
            <input
              type="text"
              placeholder="Search team index by name, identity coordinates, or engineering roles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-sm rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 focus:outline-none focus:border-blue-500/50 transition placeholder:opacity-50 text-current"
            />
          </div>
        </section>

        {/* 3. Responsive Team Cards Profile Layout Matrix */}
        <motion.section
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredMembers.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                whileHover={{ y: -4 }}
                className="p-6 rounded-3xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 backdrop-blur-md flex flex-col justify-between group shadow-sm relative overflow-hidden"
              >
                {/* Upper Deck Details */}
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover ring-2 ring-blue-500/20 border border-white/10 shrink-0"
                    />
                    <span
                      className={`inline-flex items-center gap-1 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md border ${getStatusStyle(member.status)}`}
                    >
                      <Activity size={10} />
                      {member.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-bold tracking-tight flex items-center gap-1.5">
                      {member.name}
                      {member.role === "Admin" && (
                        <span
                          title="System Operator Root Privilege"
                          className="inline-flex items-center"
                        >
                          <ShieldCheck size={16} className="text-blue-500" />
                        </span>
                      )}
                    </h3>
                    <p className="text-xs font-semibold text-blue-500/80 uppercase tracking-wider flex items-center gap-1.5">
                      <Shield size={12} />
                      {member.role}
                    </p>
                  </div>

                  {/* Context Metrics Info Block */}
                  <div className="mt-4 space-y-2 text-xs font-medium opacity-70">
                    <div className="flex items-center gap-2">
                      <Mail size={14} className="opacity-60" />
                      <span className="truncate">{member.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="opacity-60" />
                      <span>{member.location}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Utility Actions Block */}
                <div className="mt-6 pt-4 border-t border-black/5 dark:border-white/5 flex items-center justify-end gap-2">
                  <a
                    href={`mailto:${member.email}`}
                    title={`Initiate direct secure fallback line to ${member.name}`}
                    className="p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-blue-600/10 border border-black/5 dark:border-white/5 hover:text-blue-400 transition cursor-pointer"
                  >
                    <Mail size={14} />
                  </a>
                  {member.role !== "Admin" && (
                    <button
                      onClick={() => handleRemoveMember(member.id)}
                      title="De-authorize team token access privileges"
                      className="p-2 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-red-600/10 border border-black/5 dark:border-white/5 hover:text-red-400 transition cursor-pointer"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Missing Context Placeholder Flag Layout UI */}
          {filteredMembers.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full py-16 text-center border border-dashed border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 rounded-3xl backdrop-blur-md"
            >
              <Shield className="mx-auto opacity-30 mb-4" size={32} />
              <h4 className="text-lg font-bold">
                No team members match parameters
              </h4>
              <p className="text-sm opacity-50 font-medium max-w-sm mx-auto mt-1">
                Refine your active lookup parameters or clear active filter
                modifications.
              </p>
            </motion.div>
          )}
        </motion.section>
      </main>
    </div>
  );
}
