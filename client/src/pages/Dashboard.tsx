import React from "react";
import { useTheme } from "../hooks/useTheme";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { dark, toggleTheme } = useTheme();
  return <div className={
        dark
          ? "gradient-bg text-white"
          : "light-gradient text-black"
      }>

     {  <Navbar
          dark={dark}
          toggleTheme={toggleTheme}
        />  }
  </div>;
};

export default Dashboard;
