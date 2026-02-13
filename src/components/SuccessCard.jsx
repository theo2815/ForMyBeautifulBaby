import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import catDance from '../assets/cat_dance.gif';

const SuccessCard = () => {
  useEffect(() => {
    // Fire confetti on mount
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
      confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center p-4">
      {/* Polaroid Container */}
      <motion.div
        initial={{ scale: 0, rotate: 10 }}
        animate={{ scale: 1, rotate: -3 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="polaroid bg-white p-4 shadow-2xl relative"
      >
        <div className="bg-gray-100 p-2 mb-12 border border-gray-200">
             <img 
                src={catDance} 
                alt="Dancing Cat" 
                className="w-64 h-64 object-cover filter contrast-110 cat-pink"
            />
        </div>
        
        <p className="absolute bottom-6 left-0 right-0 text-center text-3xl font-handwriting text-gray-700 -rotate-1">
          She said YES! 💖
        </p>
        
         {/* Tape Effect */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 bg-pink-200/50 rotate-2 backdrop-blur-sm" />
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="mt-12 text-2xl font-bold text-pink-600 font-pixel bg-white/50 px-6 py-2 rounded-full backdrop-blur-sm"
      >
        Feb 14th Confirmed! ✨
      </motion.p>
    </div>
  );
};

export default SuccessCard;
