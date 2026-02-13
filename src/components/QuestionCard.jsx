import { useState } from 'react';
import { motion } from 'framer-motion';
import catHeart from '../assets/cat_heart.gif';
import yesBtnImg from '../assets/yes.png';
import noBtnImg from '../assets/no.png';

const QuestionCard = ({ onYes }) => {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });

  const moveNoButton = () => {
    const min = 100;
    const max = 250;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * (max - min) + min;
    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    setNoBtnPosition({ x: moveX, y: moveY });
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0, rotate: -5 }}
      animate={{ scale: 1, opacity: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="relative z-10 w-[90vw] max-w-md"
    >
      <div className="paper-card p-8 text-center flex flex-col items-center">
        {/* Washi Tape Decoration */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-pink-200 opacity-80 rotate-1 shadow-sm" />
        <div className="absolute -top-4 -right-2 w-20 h-6 bg-yellow-200 opacity-80 rotate-12 shadow-sm" />
        <div className="absolute -bottom-2 -left-2 w-24 h-6 bg-blue-200 opacity-80 -rotate-3 shadow-sm" />

        <h1 className="mt-4 text-4xl md:text-5xl font-bold text-pink-600 mb-6 font-handwriting marker-highlight relative inline-block">
          Be My Valentine? 
        </h1>

        <div className="relative mb-8">
            <img 
                src={catHeart} 
                alt="Cute cat" 
                className="w-48 img-sticker rotate-2 hover:scale-105 transition-transform duration-300 cat-pink"
            />
        </div>

        <div className="flex gap-8 items-center w-full justify-center relative h-20">
          <motion.button
            whileHover={{ scale: 1.1, rotate: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onYes}
            className="focus:outline-none z-20 hover-jelly"
          >
             <img src={yesBtnImg} alt="Yes" className="w-[120px] sticker drop-shadow-md" />
          </motion.button>

          <div className="relative w-[120px] h-full flex items-center justify-center">
             <motion.button
              animate={noBtnPosition}
              onMouseEnter={moveNoButton}
              onFocus={moveNoButton}
              onClick={moveNoButton}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute focus:outline-none"
            >
              <img src={noBtnImg} alt="No" className="w-[120px] sticker drop-shadow-md opacity-80" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default QuestionCard;
