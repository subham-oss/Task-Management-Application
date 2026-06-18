import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-32 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 md:p-20 text-center text-white shadow-2xl relative overflow-hidden"
      >
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to transform your workflow?</h2>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
            Join thousands of teams already using TaskFlow to get more done in less time.
          </p>
          <Link
            to="/signup"
            className="inline-block px-10 py-4 rounded-full bg-white text-blue-600 font-bold text-lg hover:shadow-lg hover:scale-105 transition-all"
          >
            Start Your Free Trial
          </Link>
        </div>
      </motion.div>
    </section>
  );
}