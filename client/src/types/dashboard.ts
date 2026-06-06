export type Priority = "High" | "Medium" | "Low";

export type TaskStatus =
  | "Completed"
  | "In Progress"
  | "Pending";

export interface Task {
  id: number;
  title: string;
  project: string;
  priority: Priority;
  status: TaskStatus;
  dueDate: string;
}

export interface StatCard {
  title: string;
  value: string;
  change: string;
  color: string;
}

export interface ProjectProgress {
  name: string;
  progress: number;
}

export interface Event {
  id: number;
  title: string;
  time: string;
  type: "success" | "warning" | "danger";
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
  status: "Online" | "Offline";
}