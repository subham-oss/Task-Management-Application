import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

/**
 * Gives any section a sense of depth as it enters/leaves the viewport:
 * it rises out of the page (translateZ + scale) and settles flat,
 * with a faint perspective rotation that un-tilts as it centers.
 *
 * Pass `intensity` to dial how dramatic the tilt is per-section —
 * the hero and dashboard preview want more drama than, say, the FAQ.
 */
export function useScrollTilt(intensity: number = 1) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [12 * intensity, 0, -8 * intensity]
  );

  const translateZ = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [-120 * intensity, 0, -60 * intensity]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [0, 1, 1, 0.4]
  );

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.92, 1, 0.97]);

  return { ref, rotateX, translateZ, opacity, scale, scrollYProgress };
}