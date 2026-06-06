import { MoreVertical } from "lucide-react";
import { tasks } from "../data/dashboardData";

export default function TaskTable() {
  const priorityColors = {
    High: "bg-red-100 text-red-600",
    Medium: "bg-yellow-100 text-yellow-600",
    Low: "bg-green-100 text-green-600",
  };

  const statusColors = {
    Completed:
      "bg-green-100 text-green-600",
    "In Progress":
      "bg-indigo-100 text-indigo-600",
    Pending:
      "bg-yellow-100 text-yellow-600",
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">
          Recent Tasks
        </h2>

        <button className="text-indigo-600 text-sm font-medium">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px]">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800">
              <th className="text-left py-3">
                Task
              </th>
              <th className="text-left py-3">
                Priority
              </th>
              <th className="text-left py-3">
                Status
              </th>
              <th className="text-left py-3">
                Due Date
              </th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {tasks.map((task) => (
              <tr
                key={task.id}
                className="border-b border-slate-100 dark:border-slate-800"
              >
                <td className="py-4">
                  <div>
                    <h4 className="font-medium">
                      {task.title}
                    </h4>

                    <p className="text-sm text-slate-500">
                      {task.project}
                    </p>
                  </div>
                </td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      priorityColors[
                        task.priority
                      ]
                    }`}
                  >
                    {task.priority}
                  </span>
                </td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      statusColors[
                        task.status
                      ]
                    }`}
                  >
                    {task.status}
                  </span>
                </td>

                <td>{task.dueDate}</td>

                <td>
                  <button>
                    <MoreVertical
                      size={18}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}