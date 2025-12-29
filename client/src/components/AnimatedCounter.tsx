import React, { useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export function AnimatedCounter({
  target,
  duration = 2,
  suffix = '',
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = target / (duration * 60); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <motion.div
      ref={ref}
      className={`portfolio-primary text-3xl font-bold ${className}`}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {count}
      {suffix}
    </motion.div>
  );
}
