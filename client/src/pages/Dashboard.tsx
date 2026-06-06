import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatCards from "../components/StatCards";
import TaskCompletionChart from "../components/TaskCompletionChart";
import TaskTable from "../components/TaskTable";
import CalendarWidget from "../components/CalendarWidget";
import ProgressOverview from "../components/ProgressOverview";
import MobileBottomNav from "../components/MobileBottomNav";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B1120]">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 lg:ml-72">
          <Header />

          <div className="p-6 space-y-6">
            <StatCards />

            <div className="grid xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <TaskCompletionChart />
              </div>

              <CalendarWidget />
            </div>

            <TaskTable />

            <ProgressOverview />
          </div>
        </main>
      </div>

      <MobileBottomNav />
    </div>
  );
}











/* import { useTheme } from "../hooks/useTheme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
        
        <Footer />
  </div>;
};

export default Dashboard;
 */