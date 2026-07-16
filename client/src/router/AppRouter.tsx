import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import TeamMembers from "../pages/TeamMembers";
import CreateTask from "../pages/CreateTask";
import ManageTask from "../pages/ManageTask";
import EditTask from "../pages/EditTask";

export default function AppRouter() {
  const islogin: boolean = true
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        {islogin && (
          <>
            <Route path="/dashboard/:id" element={<Dashboard />} />
            <Route path="/dashboard/:id/team" element={<TeamMembers />} />
            <Route path="/dashboard/:id/create" element={<CreateTask />} />
            <Route path="/dashboard/:id/tasks" element={<ManageTask />} />
            <Route path="/dashboard/:id/tasks/edit/:taskId" element={<EditTask />} />
             
          </>
            )}
      </Routes>
    </BrowserRouter>
  );
}
