"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 90 }, // Start off hidden and slightly translated down
  visible: {
    opacity: 1,  // Full opacity when it enters the view
    y: 0,        // Slide it back to its original position
    transition: { duration: 0.8, ease: "easeOut" }, // Smooth transition
  },
};

const AnimatedSection = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}  // Trigger the animation when 30% of the component is in view
      variants={fadeInUp}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
