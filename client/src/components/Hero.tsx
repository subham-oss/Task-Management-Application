  import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { ArrowRight, CheckCircle2, Circle, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface ScatterCard {
  id: string;
  title: string;
  tag: string;
  status: "done" | "active" | "todo";
  // scattered (start) transform
  x0: number;
  y0: number;
  rot0: number;
  // ordered (end) position in the stack
  order: number;
}

const cards: ScatterCard[] = [
  { id: "TF-104", title: "Design sprint review", tag: "Design", status: "done", x0: -260, y0: -160, rot0: -18, order: 0 },
  { id: "TF-107", title: "Ship onboarding v2", tag: "Engineering", status: "active", x0: 220, y0: -190, rot0: 14, order: 1 },
  { id: "TF-111", title: "Customer call notes", tag: "Research", status: "todo", x0: -300, y0: 40, rot0: 9, order: 2 },
  { id: "TF-118", title: "Q3 roadmap draft", tag: "Strategy", status: "active", x0: 260, y0: 80, rot0: -11, order: 3 },
  { id: "TF-122", title: "Fix mobile nav bug", tag: "Engineering", status: "todo", x0: -180, y0: 220, rot0: 20, order: 4 },
];

const statusIcon = {
  done: <CheckCircle2 className="w-4 h-4 text-emerald-400" />,
  active: <Clock className="w-4 h-4 text-amber-400" />,
  todo: <Circle className="w-4 h-4 text-white/30" />,
};

function TaskCard({
  card,
  progress,
}: {
  card: ScatterCard;
  progress: MotionValue<number>;
}) {
  const x = useTransform(progress, [0, 1], [card.x0, 0]);
  const y = useTransform(
    progress,
    [0, 1],
    [card.y0, card.order * 64 - 96]
  );
  const rotate = useTransform(progress, [0, 1], [card.rot0, 0]);
  const z = useTransform(progress, [0, 1], [-40, card.order * -8]);
  const scale = useTransform(progress, [0, 1], [0.94, 1]);

  return (
    <motion.div
      style={{ x, y, rotate, translateZ: z, scale }}
      className="absolute left-1/2 top-1/2 w-70 -translate-x-1/2 -translate-y-1/2"
    >
      <div className="glass rounded-xl px-4 py-3 flex items-center gap-3 shadow-xl">
        {statusIcon[card.status]}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{card.title}</p>
          <p className="text-xs opacity-70 font-mono">
            {card.id} · {card.tag}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const stageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: stageRef,
    offset: ["start 0.85", "start 0.25"],
  });

  return (
    <div ref={stageRef} className="relative pt-32 pb-24 md:pt-25 md:pb-25 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono opacity-70 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            Now shipping faster sprints
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight font-display">
            Turn scattered
            <br />
            work into{" "}
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              shipped work.
            </span>
          </h1>

          <p className="mt-6 text-lg opacity-70 max-w-md">
            TaskFlow takes the backlog everyone's afraid to open and turns
            it into a clear, ordered plan your team actually follows.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/signup"
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 rounded-xl font-medium transition-all hover:scale-[1.03]"
            >
              Start for free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#dashboard-preview"
              className="px-6 py-3.5 rounded-xl font-medium glass shadow-xl hover:bg-white/10 transition"
            >
              See it in action
            </a>
          </div>

          <p className="mt-8 text-sm opacity-70">
            No credit card required · Free for teams up to 5
          </p>
        </motion.div>

        <div
          className="relative h-140 md:h-160 "
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative w-full h-full"
            style={{ transformStyle: "preserve-3d" }}
          >
            {cards.map((card) => (
              <TaskCard key={card.id} card={card} progress={scrollYProgress} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}