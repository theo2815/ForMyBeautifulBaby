import { useState } from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  const [particles] = useState(() => 
    [...Array(15)].map((_, i) => ({
      id: i,
      size: Math.random() * 30 + 10,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: Math.random() * 3 + 2,
      xOffset: Math.random() * 20 - 10,
      delay: Math.random() * 2
    }))
  );

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute text-pink-200/50 select-none"
          style={{ 
              fontSize: `${p.size}px`,
              left: `${p.left}%`,
              top: `${p.top}%`
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, p.xOffset, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
};

export default Background;
