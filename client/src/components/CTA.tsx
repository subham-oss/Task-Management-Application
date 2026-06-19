import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="relative py-28 px-4" style={{ perspective: "1200px" }}>
      <motion.div
        initial={{ opacity: 0, y: 30, rotateX: -10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="max-w-4xl mx-auto glass rounded-3xl px-8 py-16 md:px-16 md:py-20 text-center relative overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative">
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight max-w-xl mx-auto">
            Ready to transform your workflow?
          </h2>
          <p className="mt-5 text-white/60 max-w-md mx-auto">
           Join thousands of teams already using TaskFlow to get more done in less time.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/register"
              className="group flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-medium transition-all hover:scale-[1.03]"
            >
              Start for free
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}