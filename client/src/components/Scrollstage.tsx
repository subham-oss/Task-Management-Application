
import { motion } from "framer-motion";
import { useScrollTilt } from "../hooks/useScrolltilt.ts";
import type { ReactNode } from "react";

interface ScrollStageProps {
  children: ReactNode;
  intensity?: number;
  className?: string;
  id?: string;
}

/**
 * Wraps a section in a 3D perspective stage. As the section scrolls
 * through the viewport it lifts off the page plane and settles flat —
 * this is the shared "engine" behind every section's depth effect.
 */
export default function ScrollStage({
  children,
  intensity = 1,
  className = "",
  id,
}: ScrollStageProps) {
  const { ref, rotateX, translateZ, opacity, scale } =
    useScrollTilt(intensity);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative ${className}`}
      style={{ perspective: "1400px" }}
    >
      <motion.div
        style={{
          rotateX,
          translateZ,
          opacity,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}