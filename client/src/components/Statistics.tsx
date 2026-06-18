import { motion } from "framer-motion";

const stats = [
  { label: "Active Users", value: "100K+" },
  { label: "Tasks Completed", value: "5M+" },
  { label: "Uptime", value: "99.9%" },
];

export default function Statistics() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto glass rounded-3xl p-12 grid md:grid-cols-3 gap-8 text-center relative overflow-hidden">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <h4 className="text-5xl font-extrabold text-blue-500 mb-2">{stat.value}</h4>
            <p className="text-lg font-medium opacity-80">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}