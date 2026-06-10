import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Projects from "../pages/Projects";
import { Calendar } from "lucide-react";
import Analytics from "../pages/Analytics";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/dashboard" element={<Dashboard />}  />

        <Route path="/tasks"  element={<Tasks />} />

        <Route path="/projects"  element={<Projects />} />

        <Route path="/calendar"  element={<Calendar />}  />

        <Route path="/analytics"  element={<Analytics />}  />
      </Routes>
    </BrowserRouter>
  );
}
