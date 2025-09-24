"use client";

import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function SiteHeaderMark() {
  const pathname = usePathname();
  return pathname === "/" ? <ChanhDaiMarkMotion /> : <ChanhDaiMark />;
}

// Animated logo for homepage
function ChanhDaiMarkMotion() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const distanceRef = useRef(160);

  useMotionValueEvent(scrollY, "change", (latestValue) => {
    setVisible(latestValue >= distanceRef.current);
  });

  useEffect(() => {
    const coverMark = document.getElementById("js-cover-mark");
    if (!coverMark) return;

    distanceRef.current = calcDistance(coverMark);

    const resizeObserver = new ResizeObserver(() => {
      distanceRef.current = calcDistance(coverMark);
    });
    resizeObserver.observe(coverMark);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 75"
      fill="none"
      initial={{
        opacity: 0,
        transform: "translateY(8px)",
      }}
      animate={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0px)" : "translateY(8px)",
      }}
      transition={{ duration: 0.3 }}
      className="h-8 w-auto"
    >
      <path
        fill="currentColor"
        d="M 81.25 75 L 75 75 L 68.75 75 L 68.75 68.75 L 68.75 62.5 L 68.75 56.25 L 68.75 50 L 68.75 43.75 L 68.75 37.5 L 68.75 31.25 L 68.75 25 L 68.75 18.75 L 68.75 12.5 L 68.75 6.25 L 68.75 0 L 75 0 L 81.25 0 L 87.5 0 L 93.75 0 L 100 0 L 106.25 0 L 112.5 0 L 118.75 0 L 125 0 L 125 6.25 L 125 12.5 L 118.75 12.5 L 112.5 12.5 L 106.25 12.5 L 100 12.5 L 93.75 12.5 L 87.5 12.5 L 81.25 12.5 L 81.25 18.75 L 81.25 25 L 87.5 25 L 93.75 25 L 100 25 L 106.25 25 L 106.25 31.25 L 106.25 37.5 L 100 37.5 L 93.75 37.5 L 87.5 37.5 L 81.25 37.5 L 81.25 43.75 L 81.25 50 L 81.25 56.25 L 81.25 62.5 L 81.25 68.75 L 81.25 75 Z M 37.5 75 L 31.25 75 L 25 75 L 25 68.75 L 25 62.5 L 25 56.25 L 25 50 L 25 43.75 L 25 37.5 L 25 31.25 L 25 25 L 25 18.75 L 25 12.5 L 18.75 12.5 L 12.5 12.5 L 6.25 12.5 L 0 12.5 L 0 6.25 L 0 0 L 6.25 0 L 12.5 0 L 18.75 0 L 25 0 L 31.25 0 L 37.5 0 L 43.75 0 L 50 0 L 56.25 0 L 62.5 0 L 62.5 6.25 L 62.5 12.5 L 56.25 12.5 L 50 12.5 L 43.75 12.5 L 37.5 12.5 L 37.5 18.75 L 37.5 25 L 37.5 31.25 L 37.5 37.5 L 37.5 43.75 L 37.5 50 L 37.5 56.25 L 37.5 62.5 L 37.5 68.75 L 37.5 75 Z M 193.75 75 L 187.5 75 L 181.25 75 L 175 75 L 168.75 75 L 162.5 75 L 156.25 75 L 150 75 L 143.75 75 L 143.75 68.75 L 143.75 62.5 L 150 62.5 L 156.25 62.5 L 162.5 62.5 L 168.75 62.5 L 175 62.5 L 181.25 62.5 L 187.5 62.5 L 187.5 56.25 L 187.5 50 L 193.75 50 L 200 50 L 200 56.25 L 200 62.5 L 193.75 62.5 L 193.75 68.75 L 193.75 75 Z M 143.75 12.5 L 150 12.5 L 156.25 12.5 L 162.5 12.5 L 168.75 12.5 L 175 12.5 L 181.25 12.5 L 187.5 12.5 L 187.5 18.75 L 187.5 25 L 193.75 25 L 200 25 L 200 18.75 L 200 12.5 L 193.75 12.5 L 193.75 6.25 L 193.75 0 L 187.5 0 L 181.25 0 L 175 0 L 168.75 0 L 162.5 0 L 156.25 0 L 150 0 L 143.75 0 L 143.75 6.25 L 143.75 12.5 Z M 143.75 62.5 L 143.75 56.25 L 143.75 50 L 143.75 43.75 L 143.75 37.5 L 143.75 31.25 L 143.75 25 L 143.75 18.75 L 143.75 12.5 L 137.5 12.5 L 131.25 12.5 L 131.25 18.75 L 131.25 25 L 131.25 31.25 L 131.25 37.5 L 131.25 43.75 L 131.25 50 L 131.25 56.25 L 131.25 62.5 L 137.5 62.5 L 143.75 62.5 Z"
      />
    </motion.svg>
  );
}

// Static logo for inner pages
function ChanhDaiMark(props: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 200 75"
      className="h-8 w-auto"
      {...props}
    >
      <path
        fill="currentColor"
        d="M 81.25 75 L 75 75 L 68.75 75 L 68.75 68.75 L 68.75 62.5 L 68.75 56.25 L 68.75 50 L 68.75 43.75 L 68.75 37.5 L 68.75 31.25 L 68.75 25 L 68.75 18.75 L 68.75 12.5 L 68.75 6.25 L 68.75 0 L 75 0 L 81.25 0 L 87.5 0 L 93.75 0 L 100 0 L 106.25 0 L 112.5 0 L 118.75 0 L 125 0 L 125 6.25 L 125 12.5 L 118.75 12.5 L 112.5 12.5 L 106.25 12.5 L 100 12.5 L 93.75 12.5 L 87.5 12.5 L 81.25 12.5 L 81.25 18.75 L 81.25 25 L 87.5 25 L 93.75 25 L 100 25 L 106.25 25 L 106.25 31.25 L 106.25 37.5 L 100 37.5 L 93.75 37.5 L 87.5 37.5 L 81.25 37.5 L 81.25 43.75 L 81.25 50 L 81.25 56.25 L 81.25 62.5 L 81.25 68.75 L 81.25 75 Z M 37.5 75 L 31.25 75 L 25 75 L 25 68.75 L 25 62.5 L 25 56.25 L 25 50 L 25 43.75 L 25 37.5 L 25 31.25 L 25 25 L 25 18.75 L 25 12.5 L 18.75 12.5 L 12.5 12.5 L 6.25 12.5 L 0 12.5 L 0 6.25 L 0 0 L 6.25 0 L 12.5 0 L 18.75 0 L 25 0 L 31.25 0 L 37.5 0 L 43.75 0 L 50 0 L 56.25 0 L 62.5 0 L 62.5 6.25 L 62.5 12.5 L 56.25 12.5 L 50 12.5 L 43.75 12.5 L 37.5 12.5 L 37.5 18.75 L 37.5 25 L 37.5 31.25 L 37.5 37.5 L 37.5 43.75 L 37.5 50 L 37.5 56.25 L 37.5 62.5 L 37.5 68.75 L 37.5 75 Z M 193.75 75 L 187.5 75 L 181.25 75 L 175 75 L 168.75 75 L 162.5 75 L 156.25 75 L 150 75 L 143.75 75 L 143.75 68.75 L 143.75 62.5 L 150 62.5 L 156.25 62.5 L 162.5 62.5 L 168.75 62.5 L 175 62.5 L 181.25 62.5 L 187.5 62.5 L 187.5 56.25 L 187.5 50 L 193.75 50 L 200 50 L 200 56.25 L 200 62.5 L 193.75 62.5 L 193.75 68.75 L 193.75 75 Z M 143.75 12.5 L 150 12.5 L 156.25 12.5 L 162.5 12.5 L 168.75 12.5 L 175 12.5 L 181.25 12.5 L 187.5 12.5 L 187.5 18.75 L 187.5 25 L 193.75 25 L 200 25 L 200 18.75 L 200 12.5 L 193.75 12.5 L 193.75 6.25 L 193.75 0 L 187.5 0 L 181.25 0 L 175 0 L 168.75 0 L 162.5 0 L 156.25 0 L 150 0 L 143.75 0 L 143.75 6.25 L 143.75 12.5 Z M 143.75 62.5 L 143.75 56.25 L 143.75 50 L 143.75 43.75 L 143.75 37.5 L 143.75 31.25 L 143.75 25 L 143.75 18.75 L 143.75 12.5 L 137.5 12.5 L 131.25 12.5 L 131.25 18.75 L 131.25 25 L 131.25 31.25 L 131.25 37.5 L 131.25 43.75 L 131.25 50 L 131.25 56.25 L 131.25 62.5 L 137.5 62.5 L 143.75 62.5 Z"
      />
    </svg>
  );
}

// Helper: calculate scroll distance
const calcDistance = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  const scrollTop = document.documentElement.scrollTop;
  const headerHeight = 56;
  return scrollTop + rect.top + rect.height - headerHeight;
};
