import { useEffect } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import catDance from '../assets/cat_dance.gif';
import windowBg from '../assets/window.png';

const SuccessMessage = () => {
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
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className="relative w-[90vw] max-w-[800px] aspect-[3/2] flex flex-col items-center justify-center p-8 pt-32 text-center"
      style={{
        backgroundImage: `url(${windowBg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4 font-handwriting drop-shadow-sm">
        Yippeeee!
      </h1>

      <img 
        src={catDance} 
        alt="Dancing Cat" 
        className="w-48 md:w-64 mb-6"
      />
      
      <p className="inline-block p-4 bg-white/50 rounded-xl text-xl md:text-2xl text-pink-800 font-bold drop-shadow-sm backdrop-blur-sm">
         Date confirmed: Feb 14th! 💖
      </p>
    </motion.div>
  );
};

export default SuccessMessage;
