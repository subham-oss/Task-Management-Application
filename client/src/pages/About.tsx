import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { Target, Users, Shield, Sparkles, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const values = [
  {
    icon: <Target className="text-blue-500" size={28} />,
    title: "Our Mission",
    description: "To eliminate the friction of context-switching and bring ultimate clarity to modern workflows, helping teams do their best work without the burnout."
  },
  {
    icon: <Sparkles className="text-purple-500" size={28} />,
    title: "Intentionally Simple",
    description: "We believe software should adapt to you, not the other way around. Every pixel and feature is designed to keep you in your creative flow state."
  },
  {
    icon: <Users className="text-pink-500" size={28} />,
    title: "Radical Collaboration",
    description: "Great things are never done by one person. We build tools that make sharing context, tasks, and achievements feel completely effortless."
  },
  {
    icon: <Shield className="text-emerald-500" size={28} />,
    title: "Privacy & Trust First",
    description: "Your data is your architecture. We secure it with industry-standard encryption and transparent practices, because productivity requires peace of mind."
  }
];

// Explicitly typing variants to eliminate TypeScript compilation errors
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

export default function About() {
  return (
    <div className="relative min-h-screen overflow-x-hidden ">
      {/* Global Navigation Bar */}
      <Navbar />

      {/* Main Content Layout Wrapper */}
      <main className="pt-32 pb-24 mb-8 px-4 max-w-7xl mx-auto relative z-10">
        

        {/* Hero Header Section */}
        <header className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-500 border border-blue-500/20 inline-block mb-4"
          >
            Behind the Pixels
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6"
          >
            Bringing Harmony to <span className="text-blue-500">The Hustle</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg opacity-75 leading-relaxed"
          >
            TaskFlow was born out of frustration. We were tired of clunky, rigid, over-engineered tools that made managing a project feel harder than the actual work itself. We decided to fix it.
          </motion.p>
        </header>

        {/* Stats Spotlight Grid */}
        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 p-8 rounded-3xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 mb-24 text-center"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-500">2026</h2>
            <p className="text-xs uppercase opacity-60 font-medium tracking-wide mt-1">Year Founded</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-purple-500">14+</h2>
            <p className="text-xs uppercase opacity-60 font-medium tracking-wide mt-1">Global Dreamers</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-pink-500">100%</h2>
            <p className="text-xs uppercase opacity-60 font-medium tracking-wide mt-1">Bootstrapped</p>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-emerald-500">24/7</h2>
            <p className="text-xs uppercase opacity-60 font-medium tracking-wide mt-1">Reliability</p>
          </div>
        </motion.section>

        {/* Philosophy / Values Block */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">What Guides Us</h2>
            <p className="opacity-60 mt-2">The core principles inside every line of code we write.</p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {values.map((val, idx) => (
              <motion.div 
                key={idx}
                variants={itemVariants}
                className="p-8 rounded-2xl bg-white/5 dark:bg-black/20 border border-black/10 dark:border-white/10 shadow-sm flex flex-col sm:flex-row gap-5 items-start backdrop-blur-md"
              >
                <div className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{val.title}</h3>
                  <p className="opacity-70 text-sm leading-relaxed">{val.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Vision Block */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl p-8 md:p-12 text-center relative overflow-hidden bg-linear-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20"
        >
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to see it in action?</h2>
            <p className="opacity-75 mb-6 text-sm md:text-base">
              We are continuously building, listening to user feedback, and shaping TaskFlow into something magical. The best way to know us is to try our platform.
            </p>
            <Link
              to="/register"
              className="inline-block px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 hover:scale-[1.02] transition-all text-sm"
            >
              Create Your Workplace
            </Link>
          </div>
        </motion.section>

      </main>
      <Footer/>
    </div>
  );
}