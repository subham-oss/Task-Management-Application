import {
  AreaChart,
  Area,
  XAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { day: "Mon", value: 20 },
  { day: "Tue", value: 35 },
  { day: "Wed", value: 60 },
  { day: "Thu", value: 45 },
  { day: "Fri", value: 25 },
  { day: "Sat", value: 35 },
  { day: "Sun", value: 70 },
];

export default function TaskCompletionChart() {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm h-[420px]">
      <h2 className="font-semibold text-lg mb-6">
        Task Completion Overview
      </h2>

      <ResponsiveContainer width="100%" height="90%">
        <AreaChart data={data}>
          <XAxis dataKey="day" />
          <Tooltip />

          <Area
            dataKey="value"
            stroke="#6366F1"
            fill="#6366F1"
            fillOpacity={0.15}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}