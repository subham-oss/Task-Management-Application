import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function CalendarWidget() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm">
      <h2 className="font-semibold mb-5">
        Calendar
      </h2>

      <Calendar />

      <div className="mt-6">
        <h3 className="font-medium mb-3">
          Today's Events
        </h3>

        <div className="space-y-3">
          <div>🟢 Team Standup</div>
          <div>🔴 Project Deadline</div>
          <div>🟡 Review Meeting</div>
        </div>
      </div>
    </div>
  );
}