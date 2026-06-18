import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function DashboardPreview() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });

  // 3D perspective transformations
  const rotateX = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return (
    <section ref={containerRef} className="py-20 px-4 perspective-[2000px] flex justify-center">
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          transformStyle: "preserve-3d",
        }}
        className="w-full max-w-5xl rounded-2xl glass border border-white/20 shadow-2xl overflow-hidden aspect-video bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center relative"
      >
        {/* Replace this div with your actual app screenshot or mockup */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
        <div className="z-10 text-center p-8 backdrop-blur-md rounded-xl bg-black/20 border border-white/10">
          <h3 className="text-2xl font-bold mb-2 text-white">Interactive Dashboard</h3>
          <p className="text-white/80">Manage everything in one intuitive view.</p>
        </div>
      </motion.div>
    </section>
  );
}