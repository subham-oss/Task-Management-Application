import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl z-10"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Master Your Workflow with <span className="text-blue-500">TaskFlow</span>
        </h1>
        <p className="text-lg md:text-xl opacity-80 mb-10 max-w-2xl mx-auto">
          The ultimate task management application designed to boost productivity, streamline collaboration, and bring clarity to your daily goals.
        </p>
        <div className="flex items-center justify-center gap-4">
          <Link
            to="/signup"
            className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition flex items-center gap-2"
          >
            Get Started Free <ArrowRight size={20} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
}