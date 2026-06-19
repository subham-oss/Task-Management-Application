import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We went from three tools and a spreadsheet to one board everyone actually opens. Sprint planning takes a third of the time it used to.",
    name: "Priya Nair",
    role: "Engineering Lead, Loopbase",
    initials: "PN",
    accent: "bg-blue-500",
  },
  {
    quote:
      "The dependency tracking alone paid for itself in the first month. We stopped starting work that was already blocked.",
    name: "Marcus Webb",
    role: "Head of Product, Fennel",
    initials: "MW",
    accent: "bg-purple-500",
  },
  {
    quote:
      "Our PM finally has visibility into what's actually happening without asking for status updates every morning.",
    name: "Sofia Reyes",
    role: "COO, Northbound",
    initials: "SR",
    accent: "bg-emerald-500",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 px-4" style={{ perspective: "1300px" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <p className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            Trusted by teams
          </p>
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight">
            Teams that ship, talking shop.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{
                opacity: 0,
                y: 50,
                rotateY: i % 2 === 0 ? -12 : 12,
              }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass rounded-2xl p-7 flex flex-col"
            >
              <Quote className="w-6 h-6 text-white/20 mb-4" />
              <p className="text-sm leading-relaxed text-white/80 flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/10">
                <div
                  className={`w-10 h-10 rounded-full ${t.accent} flex items-center justify-center text-sm font-semibold text-white shrink-0`}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 