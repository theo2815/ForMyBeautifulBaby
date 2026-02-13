import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

const HeartOrb = ({ onOpen }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen cursor-pointer group" onClick={onOpen}>
      <div className="relative">
        {/* Glowing Orb Effect */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5] 
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 bg-pink-500 rounded-full blur-[60px]"
        />
        
        {/* Main Heart Container */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="relative z-10 bg-white/10 backdrop-blur-md p-12 rounded-full border border-white/30 shadow-[0_0_50px_rgba(236,72,153,0.5)] group-hover:shadow-[0_0_80px_rgba(236,72,153,0.8)] transition-all duration-500"
        >
          <Heart 
            size={100} 
            className="text-pink-400 drop-shadow-lg fill-pink-500/20 group-hover:fill-pink-500/40 transition-all duration-500" 
            strokeWidth={1.5}
          />
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute top-8 right-8 text-yellow-300"
          >
            <Sparkles size={24} />
          </motion.div>
        </motion.div>
      </div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-2xl md:text-4xl font-bold text-white font-pixel tracking-widest drop-shadow-[0_2px_10px_rgba(236,72,153,0.5)] group-hover:text-pink-300 transition-colors"
      >
        CLICK TO REVEAL
      </motion.p>
    </div>
  );
};

export default HeartOrb;
