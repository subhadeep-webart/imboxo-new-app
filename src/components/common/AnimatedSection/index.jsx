// components/common/AnimatedSection.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};


const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
