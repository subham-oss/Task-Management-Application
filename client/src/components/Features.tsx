import { motion } from "framer-motion";
import { CheckCircle, Zap, Users, Shield } from "lucide-react";

const features = [
  { icon: <Zap size={32} className="text-yellow-500" />, title: "Lightning Fast", desc: "Optimized for speed so you never lose your train of thought." },
  { icon: <Users size={32} className="text-blue-500" />, title: "Team Collaboration", desc: "Work together seamlessly with real-time updates." },
  { icon: <Shield size={32} className="text-green-500" />, title: "Bank-grade Security", desc: "Your data is encrypted and backed up securely." },
  { icon: <CheckCircle size={32} className="text-purple-500" />, title: "Smart Automation", desc: "Automate repetitive tasks and focus on what matters." },
];

export default function Features() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Why Choose TaskFlow?</h2>
        <p className="opacity-70 max-w-xl mx-auto">Everything you need to manage your projects effectively.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass p-6 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="opacity-70">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}