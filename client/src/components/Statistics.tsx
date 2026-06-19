 import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 20000, suffix: "+", label: "Tasks completed" },
  { value: 100, suffix: "K+", label: "Active Users" },
  { value: 99.9, suffix: "%", label: "Uptime" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => {
        const formatted =
          value % 1 !== 0
            ? latest.toFixed(1)
            : Math.round(latest).toLocaleString();
        setDisplay(formatted);
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display">
      {display}
      {suffix}
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="relative py-28 px-4" style={{ perspective: "1200px" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-3">
            By the numbers
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
            Momentum you can measure.
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass rounded-2xl px-6 py-9 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold tracking-tight">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-3 text-sm text-white/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}