import { useState } from 'react';
import { motion } from 'framer-motion';
import envelopeImg from '../assets/envelope.png';

const EnvelopeHero = ({ onOpen }) => {
  const [hearts] = useState(() => 
    [...Array(6)].map((_, i) => ({
      id: i,
      y: -100 - Math.random() * 50,
      x: (Math.random() - 0.5) * 60,
      duration: 2 + Math.random(),
      delay: Math.random() * 2
    }))
  );

  return (
    <div className="flex flex-col items-center justify-center h-screen cursor-pointer group" onClick={onOpen}>
      <div className="relative">
        {/* Pulse Ring */}
        <div className="absolute inset-0 rounded-full bg-pink-200 blur-xl opacity-50 animate-pulse-ring" />
        
        {/* Floating Mini Hearts */}
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, y: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.8, 0], 
              y: heart.y,
              x: heart.x,
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: heart.duration, 
              repeat: Infinity, 
              delay: heart.delay 
            }}
            className="absolute top-10 left-1/2 text-2xl"
          >
            💖
          </motion.div>
        ))}

        <motion.div
           whileHover={{ scale: 1.05, rotate: 2 }}
           whileTap={{ scale: 0.95 }}
           className="relative z-10"
        >
          <img 
            src={envelopeImg} 
            alt="Envelope" 
            className="w-56 md:w-72 drop-shadow-xl filter brightness-110" 
          />
          
          {/* Badge */}
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
            className="absolute -top-4 -right-4 bg-yellow-400 text-pink-600 font-bold font-pixel px-4 py-2 rounded-full border-4 border-white shadow-lg rotate-12 group-hover:scale-110 transition-transform"
          >
            OPEN ME!
          </motion.div>
        </motion.div>

        {/* Decorative Background Blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full blur-[60px] opacity-60 pointer-events-none -z-10" />
      </div>

      <p className="mt-8 text-2xl font-bold text-pink-500 font-handwriting animate-bounce">
        You have a message! 💌
      </p>
    </div>
  );
};

export default EnvelopeHero;
