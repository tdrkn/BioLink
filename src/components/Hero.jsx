import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center">
      <motion.h1
        className="text-[clamp(2.5rem,8vw,5rem)] font-extrabold tracking-tight"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        John Doe
      </motion.h1>
      <motion.p
        className="text-[clamp(1.25rem,4vw,2rem)] text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Full‑Stack Developer
      </motion.p>
    </section>
  );
}
