'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ willChange: 'opacity, transform' }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
