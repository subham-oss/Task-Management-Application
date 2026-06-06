import type {
  Task,
  StatCard,
  ProjectProgress,
  Event,
  TeamMember,
} from "../types/dashboard";

export const statCards: StatCard[] = [
  {
    title: "Total Tasks",
    value: "124",
    change: "+12%",
    color: "indigo",
  },
  {
    title: "Completed",
    value: "89",
    change: "+71%",
    color: "green",
  },
  {
    title: "Pending",
    value: "24",
    change: "+8%",
    color: "yellow",
  },
  {
    title: "Overdue",
    value: "11",
    change: "-4%",
    color: "red",
  },
];

export const tasks: Task[] = [
  {
    id: 1,
    title: "API Integration",
    project: "E-commerce Project",
    priority: "High",
    status: "In Progress",
    dueDate: "Jun 8, 2025",
  },
  {
    id: 2,
    title: "UI Design",
    project: "Mobile App",
    priority: "Medium",
    status: "Completed",
    dueDate: "Jun 5, 2025",
  },
  {
    id: 3,
    title: "Testing & Bug Fixes",
    project: "Web Dashboard",
    priority: "Low",
    status: "Pending",
    dueDate: "Jun 12, 2025",
  },
  {
    id: 4,
    title: "Database Optimization",
    project: "Backend Project",
    priority: "High",
    status: "In Progress",
    dueDate: "Jun 15, 2025",
  },
];

export const projectProgress: ProjectProgress[] = [
  {
    name: "Project Alpha",
    progress: 80,
  },
  {
    name: "Project Beta",
    progress: 60,
  },
  {
    name: "Project Gamma",
    progress: 40,
  },
];

export const todayEvents: Event[] = [
  {
    id: 1,
    title: "Team Standup",
    time: "9:00 - 9:30 AM",
    type: "success",
  },
  {
    id: 2,
    title: "Project Deadline",
    time: "2:00 - 3:00 PM",
    type: "danger",
  },
  {
    id: 3,
    title: "Review Meeting",
    time: "4:00 - 5:00 PM",
    type: "warning",
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Jane Cooper",
    role: "UI/UX Designer",
    avatar: "https://i.pravatar.cc/100?img=1",
    status: "Online",
  },
  {
    id: 2,
    name: "Wade Warren",
    role: "Frontend Developer",
    avatar: "https://i.pravatar.cc/100?img=2",
    status: "Online",
  },
  {
    id: 3,
    name: "Cody Fisher",
    role: "Backend Developer",
    avatar: "https://i.pravatar.cc/100?img=3",
    status: "Offline",
  },
];