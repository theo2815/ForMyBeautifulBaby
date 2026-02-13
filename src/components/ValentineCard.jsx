import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Search, Meh } from 'lucide-react'; // Placeholder icons

const ValentineCard = ({ onYes }) => {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const moveNoButton = () => {
    // Calculate random position within a reasonable range
    // We want it to be annoying but not impossible (or maybe impossible is funnier)
    // using window dimensions to keep it in view, but relative to the button's initial position could be tricky.
    // simpler: relative to the current position or just random offsets.
    
    // Let's use random values between -150 and 150 for x and y
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 300 - 150;
    
    setNoBtnPosition({ x, y });
    setIsHovered(true);
  };

  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="glass p-8 rounded-3xl shadow-2xl max-w-md w-full text-center border border-white/50"
    >
      <div className="mb-6 flex justify-center">
        {/* Placeholder for Character */}
        <motion.div
            animate={{ 
              rotate: isHovered ? [0, -10, 10, 0] : 0,
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              rotate: { duration: 0.5 },
              scale: { duration: 2, repeat: Infinity }
            }}
        >
             <Heart className="w-32 h-32 text-pink-500 fill-pink-200 drop-shadow-md" />
        </motion.div>
      </div>

      <h1 className="text-4xl font-bold text-pink-600 mb-8 font-handwriting tracking-wide drop-shadow-sm">
        Will you be my Valentine? 🥺
      </h1>

      <div className="flex justify-center gap-4 items-center relative h-16">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onYes}
          className="bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 text-white font-bold py-3 px-8 rounded-full shadow-lg text-xl flex items-center gap-2 transition-all animate-heartbeat"
        >
          Yes 💖
        </motion.button>

        <motion.button
          animate={noBtnPosition}
          onMouseEnter={moveNoButton}
          onFocus={moveNoButton} 
          onClick={moveNoButton}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-white text-pink-500 border-2 border-pink-200 font-bold py-3 px-8 rounded-full shadow-md text-xl absolute hover:bg-pink-50 transition-colors"
          style={{ position: 'relative' }} 
        >
          No 😅
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ValentineCard;
