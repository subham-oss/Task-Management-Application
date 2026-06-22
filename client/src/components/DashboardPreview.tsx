
  import { motion } from "framer-motion";
import { CheckCircle2, Circle, Clock, MoreHorizontal } from "lucide-react";
import ScrollStage from "./Scrollstage";

const columns = [
  {
    title: "To do",
    count: 4,
    tasks: [
      { id: "TF-201", title: "Audit onboarding drop-off", tag: "Research" },
      { id: "TF-204", title: "Write Q3 retro doc", tag: "Strategy" },
    ],
  },
  {
    title: "In progress",
    count: 3,
    tasks: [
      { id: "TF-198", title: "Rebuild settings page", tag: "Engineering" },
      { id: "TF-202", title: "Mobile nav redesign", tag: "Design" },
    ],
  },
  {
    title: "Done",
    count: 12,
    tasks: [
      { id: "TF-187", title: "Migrate auth to OAuth2", tag: "Engineering" },
      { id: "TF-191", title: "Pricing page copy pass", tag: "Marketing" },
    ],
  },
];

export default function DashboardPreview() {
  return (
    <ScrollStage id="dashboard-preview" intensity={1.3} className="py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-xs font-mono text-purple-400 uppercase tracking-widest mb-3">
            See it in action
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
            Your whole sprint, one screen.
          </h2>
        </motion.div>

        <div
          className="glass rounded-3xl p-3 md:p-6 shadow-2xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* fake window chrome */}
          <div className="flex items-center gap-2 px-3 py-3 border-b border-white/10 mb-4">
            <span className="w-3 h-3 rounded-full bg-rose-400/70" />
            <span className="w-3 h-3 rounded-full bg-amber-400/70" />
            <span className="w-3 h-3 rounded-full bg-emerald-400/70" />
            <span className="ml-4 text-xs font-mono opacity-40">
              app.taskflow.io/sprint-24
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-4 px-2 pb-2">
            {columns.map((col, ci) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 24, rotateY: -6 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: ci * 0.12 }}
                className="bg-white/5 rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-semibold">{col.title}</span>
                  <span className="text-xs font-mono opacity-40 bg-white/10 rounded-full px-2 py-0.5">
                    {col.count}
                  </span>
                </div>

                <div className="space-y-3">
                  {col.tasks.map((task) => (
                    <div
                      key={task.id}
                      className="glass rounded-lg p-3 hover:bg-white/10 transition cursor-default"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-sm font-medium leading-snug">
                          {task.title}
                        </p>
                        <MoreHorizontal className="w-4 h-4 opacity-40 shrink-0" />
                      </div>
                      <div className="flex items-center justify-between mt-2.5">
                        <span className="text-[11px] font-mono opacity-40">
                          {task.id}
                        </span>
                        <span className="text-[11px] px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-300">
                          {task.tag}
                        </span>
                      </div>
                    </div>
                  ))}

                  {col.title === "Done" && (
                    <div className="flex items-center gap-2 text-xs text-emerald-400/80 px-1 pt-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>9 more wrapped this sprint</span>
                    </div>
                  )}
                  {col.title === "In progress" && (
                    <div className="flex items-center gap-2 text-xs text-amber-400/80 px-1 pt-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>1 more in review</span>
                    </div>
                  )}
                  {col.title === "To do" && (
                    <div className="flex items-center gap-2 text-xs opacity-40 px-1 pt-1">
                      <Circle className="w-3.5 h-3.5" />
                      <span>2 more queued</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </ScrollStage>
  );
}