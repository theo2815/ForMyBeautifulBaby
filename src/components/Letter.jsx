import { useState } from 'react';
import { motion } from 'framer-motion';
import catHeart from '../assets/cat_heart.gif';
import yesBtnImg from '../assets/yes.png';
import noBtnImg from '../assets/no.png';
import windowBg from '../assets/window.png';

const Letter = ({ onYes }) => {
  const [noBtnPosition, setNoBtnPosition] = useState({ x: 0, y: 0 });
  
  const moveNoButton = () => {
    const min = 100;
    const max = 200;
    
    // Calculate random angle and distance
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * (max - min) + min;
    
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    setNoBtnPosition({ x, y });
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.1 }}
      className="relative w-[90vw] max-w-[800px] aspect-[3/2] flex flex-col items-center justify-center p-8 pt-32 text-center"
      style={{
        backgroundImage: `url(${windowBg})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-3xl md:text-5xl font-bold text-pink-600 mb-4 font-handwriting drop-shadow-sm">
        Will you be my Valentine?
      </h1>

      <img 
        src={catHeart} 
        alt="Cute cat with heart" 
        className="w-48 md:w-64 mb-6 transition-all duration-300"
      />

      <div className="flex justify-center gap-8 items-center relative w-full h-24 mt-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={onYes}
          className="z-10 focus:outline-none"
        >
          <img src={yesBtnImg} alt="Yes" className="w-[120px]" />
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
              <img src={noBtnImg} alt="No" className="w-[120px]" />
            </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Letter;
