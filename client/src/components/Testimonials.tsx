import { motion } from "framer-motion";

const testimonials = [
  { name: "Sarah J.", role: "Product Manager", text: "TaskFlow completely transformed how our team handles sprints. The 3D views are amazing!" },
  { name: "Mark T.", role: "Freelancer", text: "Finally, a task manager that doesn't feel like a chore to use. Highly recommended." },
  { name: "Elena R.", role: "CTO", text: "The security and speed are unmatched. Integrating it into our workflow took minutes." },
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Loved by Thousands</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((test, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, rotateY: 30, z: -100 }}
            whileInView={{ opacity: 1, rotateY: 0, z: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="glass p-8 rounded-2xl flex flex-col justify-between"
          >
            <p className="italic opacity-80 mb-6">"{test.text}"</p>
            <div>
              <h4 className="font-bold">{test.name}</h4>
              <p className="text-sm text-blue-500">{test.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}