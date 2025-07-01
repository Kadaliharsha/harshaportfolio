import React from 'react';

const BubbleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {[...Array(18)].map((_, i) => (
        <div
          key={i}
          className="bubble"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${24 + Math.random() * 48}px`,
            height: `${24 + Math.random() * 48}px`,
            background: `rgba(100, 200, 255, ${0.2 + Math.random() * 0.3})`,
            animationDelay: `${Math.random() * 8}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BubbleBackground; 