import { useState } from 'react';

const FloatingDoodles = () => {
  const [doodles] = useState(() => 
    [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${10 + Math.random() * 20}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: 0.3 + Math.random() * 0.3,
      type: Math.random() > 0.66 ? 'heart' : Math.random() > 0.33 ? 'star' : 'circle',
      fontSize: `${20 + Math.random() * 30}px`,
      initialY: Math.random() * 100 
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {doodles.map((doodle) => (
        <div
          key={doodle.id}
          className="doodle-bg absolute text-pink-300/40"
          style={{
            left: doodle.left,
            animationDuration: doodle.animationDuration,
            animationDelay: doodle.animationDelay,
            opacity: doodle.opacity,
            fontSize: doodle.fontSize,
            top: `${doodle.initialY}vh` // Staggered start
          }}
        >
          {doodle.type === 'heart' && '💖'}
          {doodle.type === 'star' && '⭐'}
          {doodle.type === 'circle' && '⚪'}
        </div>
      ))}
    </div>
  );
};

export default FloatingDoodles;
