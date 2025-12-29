import React from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

export function SkillBar({ skill, percentage, delay = 0 }: SkillBarProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-6">
      <div className="mb-2 flex justify-between">
        <span className="font-medium text-foreground">{skill}</span>
        <span className="portfolio-primary">{percentage}%</span>
      </div>
      <div className="skill-bar h-3 rounded-full bg-gray-200 dark:bg-gray-700">
        <motion.div
          className="skill-progress rounded-full"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : {}}
          transition={{ duration: 1.5, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}
