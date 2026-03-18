import { motion } from "framer-motion";

const FloatingShapes = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Circles */}
    <motion.div
      className="absolute w-20 h-20 rounded-full bg-primary/10 top-[10%] left-[5%]"
      animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-32 h-32 rounded-full bg-secondary/10 top-[20%] right-[8%]"
      animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
    />
    <motion.div
      className="absolute w-16 h-16 rounded-full bg-accent/20 bottom-[15%] left-[12%]"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
    />
    {/* Stars */}
    <motion.div
      className="absolute text-3xl top-[30%] right-[15%]"
      animate={{ scale: [1, 1.3, 1], rotate: [0, 20, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      ⭐
    </motion.div>
    <motion.div
      className="absolute text-2xl bottom-[25%] right-[25%]"
      animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
    >
      ✨
    </motion.div>
    {/* Triangles / squares as decorative */}
    <motion.div
      className="absolute w-12 h-12 rounded-lg bg-pink/10 top-[50%] left-[3%] rotate-12"
      animate={{ rotate: [12, 45, 12] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
    <motion.div
      className="absolute w-10 h-10 rounded-lg bg-green/10 top-[60%] right-[5%] rotate-45"
      animate={{ rotate: [45, 90, 45] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
    />
  </div>
);

export default FloatingShapes;
