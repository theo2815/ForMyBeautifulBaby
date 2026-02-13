import { motion } from 'framer-motion';
import envelopeImg from '../assets/envelope.png';

const Envelope = ({ onOpen }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen cursor-pointer" onClick={onOpen}>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        <img src={envelopeImg} alt="Envelope" className="w-48 md:w-64 drop-shadow-xl" />
      </motion.div>
      <p className="mt-8 text-2xl font-bold text-pink-600 font-handwriting animate-pulse">
        ♡ Letter for You ♡
      </p>
    </div>
  );
};

export default Envelope;
